import dayjs from "dayjs";
import { v4 } from "uuid";
export default function useTiverseTree() {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.type === "folder") {
      tree.content.unshift({
        id: v4(),
        name: item,
        type: isFolder,
        date: dayjs().format("DD-MM-YYYY"),
        content: [],
        extension: "folder",
      });
    } else {
      let node = [];
      node = tree.content.map((n) => insertNode(n, folderId, item, isFolder));
    }

    return tree;
  };

  const addFile = (tree, folderId, item, isFolder, URI, ext) => {
    if (tree.id === folderId && tree.type === "folder") {
      tree.content.unshift({
        id: v4(),
        name: item,
        type: isFolder,
        date: dayjs().format("DD-MM-YYYY"),
        downloadURI: URI,
        extension: ext,
        content: [],
      });
    } else {
      let node = [];
      node = tree.content.map((n) =>
        addFile(n, folderId, item, isFolder, URI, ext)
      );
    }

    return tree;
  };

  const deleteFile = (tree, folderId ,prev) => {
    if (tree.id === folderId) {
      prev.content = prev.content.filter((c) => {
        return c.id !== folderId;
      });

    } else {
      let node = [];
      node = tree.content.map((n) => deleteFile(n, folderId,tree));
    }
    return tree;
  };

  return { insertNode, addFile, deleteFile };
}
