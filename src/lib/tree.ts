import { PAGES } from "./pages";

export type TreeNode =
  | { type: "dir"; name: string; path: string; children: TreeNode[] }
  | { type: "file"; name: string; path: string; pagePath: string };

function splitPath(fileName: string) {
  return fileName.split("/").filter(Boolean);
}

export function buildTree(): TreeNode[] {
  const root: { [k: string]: any } = {};

  for (const p of PAGES) {
    const parts = splitPath(p.fileName); // e.g. ["about","company.ts"] or ["README.md"]
    let cur = root;

    parts.forEach((part, idx) => {
      const isLast = idx === parts.length - 1;

      if (isLast) {
        cur.__files = cur.__files || [];
        cur.__files.push({ name: part, pagePath: p.path });
      } else {
        cur.__dirs = cur.__dirs || {};
        cur.__dirs[part] = cur.__dirs[part] || {};
        cur = cur.__dirs[part];
      }
    });
  }

  function toNodes(obj: any, basePath: string): TreeNode[] {
    const nodes: TreeNode[] = [];
    const dirs = Object.keys(obj.__dirs || {}).sort();
    for (const d of dirs) {
      const dirPath = basePath ? `${basePath}/${d}` : d;
      nodes.push({
        type: "dir",
        name: d,
        path: dirPath,
        children: toNodes(obj.__dirs[d], dirPath),
      });
    }
    const files = (obj.__files || []).sort((a: any, b: any) => a.name.localeCompare(b.name));
    for (const f of files) {
      nodes.push({
        type: "file",
        name: f.name,
        path: basePath ? `${basePath}/${f.name}` : f.name,
        pagePath: f.pagePath,
      });
    }
    return nodes;
  }

  return toNodes(root, "");
}
