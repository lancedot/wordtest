# Windows 启动说明

如果你的 PowerShell 提示符前面出现了这样的路径：

```text
PS Microsoft.PowerShell.Core\FileSystem::\\?\C:\...
```

`Next.js` 在 Windows 下启动时，可能会因为这个扩展路径报错。

推荐使用下面两种方式之一：

## 方式一：先切回普通路径，再启动

```powershell
Set-Location "C:\Users\Administrator\Desktop\Codex Items\Word"
npm run dev
```

## 方式二：直接运行项目里的启动脚本

在项目根目录双击：

- `start-dev.bat`：启动开发环境
- `start-build.bat`：执行生产构建

或者在终端里执行：

```powershell
& "C:\Users\Administrator\Desktop\Codex Items\Word\start-dev.bat"
```

启动后在浏览器打开：

```text
http://localhost:3000
```
