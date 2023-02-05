import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./styles.css";
import explorer from "./data/folderData"

export default function App() {
    const [explorerData, setExplorerData] = useState(explorer);

    const { insertNode } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree);
    };

    return (
        <div className="App">
            <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
        </div>
    );
}

function Folder({ handleInsertNode = () => { }, explorer }) {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false
    });

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        });
    };

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

            setShowInput({ ...showInput, visible: false });
        }
    };

    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div onClick={() => setExpand(!expand)} className="folder">
                    <span>📁 {explorer.name}</span>

                    <div>
                        <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
                        <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {showInput.visible && (
                        <div className="inputContainer">
                            <span>{showInput.isFolder ? "📁" : "📄"}</span>
                            <input
                                type="text"
                                className="inputContainer__input"
                                autoFocus
                                onKeyDown={onAddFolder}
                                onBlur={() => setShowInput({ ...showInput, visible: false })}
                            />
                        </div>
                    )}

                    {explorer.items.map((exp) => {
                        return (
                            <Folder
                                handleInsertNode={handleInsertNode}
                                key={exp.id}
                                explorer={exp}
                            />
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return <span className="file">📄 {explorer.name}</span>;
    }
}

const useTraverseTree = () => {
    const insertNode = function (tree, folderId, item, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder: isFolder,
                items: []
            });

            return tree;
        }

        let latestNode = [];
        latestNode = tree.items.map((ob) => {
            return insertNode(ob, folderId, item, isFolder);
        });

        return { ...tree, items: latestNode };
    };

    return { insertNode, deleteNode, renameNode };
};

const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "public nested 1",
                    isFolder: true,
                    items: [
                        {
                            id: "4",
                            name: "index.html",
                            isFolder: false,
                            items: []
                        },
                        {
                            id: "5",
                            name: "hello.html",
                            isFolder: false,
                            items: []
                        }
                    ]
                },
                {
                    id: "6",
                    name: "public_nested_file",
                    isFolder: false,
                    items: []
                }
            ]
        },
        {
            id: "7",
            name: "src",
            isFolder: true,
            items: [
                {
                    id: "8",
                    name: "App.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: "9",
                    name: "Index.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: "10",
                    name: "styles.css",
                    isFolder: false,
                    items: []
                }
            ]
        },
        {
            id: "11",
            name: "package.json",
            isFolder: false,
            items: []
        }
    ]
};