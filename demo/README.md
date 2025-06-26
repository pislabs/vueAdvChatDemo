## 环境搭建

firebase 本地模拟器安装（Node.js version >=20.0.0 || >=22.0.0）

```bash
# 1. 安装 Firebase CLI
npm install -g firebase-tools

# 2. 初始化 Firebase 项目
# 在项目根目录下运行以下命令：
firebase init

# 选择要初始化的 Firebase 功能，并确保选择 “Emulators” 以启用本地模拟器。

# 3. 配置模拟器
# 在初始化过程中，选择你要使用的模拟器，例如 Firestore、Functions 等。初始化完成后，Firebase 会生成一个 firebase.json 配置文件，其中包含模拟器的配置。

# 4. 启动模拟器
# 在项目根目录下运行以下命令以启动所有配置的模拟器：

firebase emulators:start

# 这些是本地模拟器的地址和端口，可以在浏览器中打开 http://localhost:4000 查看模拟器套件的控制面板。
```
