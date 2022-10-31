"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeVscodeConfigurations = writeVscodeConfigurations;
var _path = _interopRequireDefault(require("path"));
var _fs = require("fs");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function writeVscodeConfigurations(baseDir) {
    const vscodeSettings = _path.default.join(baseDir, ".vscode", "settings.json");
    let settings = {};
    let currentContent = "";
    try {
        currentContent = await _fs.promises.readFile(vscodeSettings, "utf8");
        settings = JSON.parse(currentContent);
    } catch (err) {}
    const libPath = "." + _path.default.sep + _path.default.join("node_modules", "typescript", "lib");
    if (settings["typescript.tsdk"] === libPath && settings["typescript.enablePromptUseWorkspaceTsdk"]) {
        return;
    }
    settings["typescript.tsdk"] = libPath;
    settings["typescript.enablePromptUseWorkspaceTsdk"] = true;
    const content = JSON.stringify(settings, null, 2);
    const vscodeFolder = _path.default.join(baseDir, ".vscode");
    try {
        await _fs.promises.lstat(vscodeFolder);
    } catch (e) {
        await _fs.promises.mkdir(vscodeFolder, {
            recursive: true
        });
    }
    await _fs.promises.writeFile(vscodeSettings, content);
    // Write to .gitignore if it exists
    const gitIgnore = _path.default.join(baseDir, ".gitignore");
    try {
        const gitIgnoreContent = await _fs.promises.readFile(gitIgnore, "utf8");
        if (!gitIgnoreContent.includes(".vscode")) {
            await _fs.promises.writeFile(gitIgnore, `${gitIgnoreContent}\n.vscode\n`);
        }
    } catch (e1) {
        await _fs.promises.writeFile(gitIgnore, `.vscode\n`);
    }
}

//# sourceMappingURL=writeVscodeConfigurations.js.map