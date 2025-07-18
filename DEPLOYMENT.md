# GitHub Pages 部署指南

## 部署步骤

### 1. 推送代码到 GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin master
```

### 2. 启用 GitHub Pages
1. 在 GitHub 仓库中，转到 **Settings** 选项卡
2. 滚动到 **Pages** 部分
3. 在 **Source** 下选择 **GitHub Actions**
4. 保存设置

### 3. 自动部署
- 每次推送到 `master` 分支时，GitHub Actions 会自动构建和部署网站
- 构建完成后，网站将在 `https://yourusername.github.io/evertrace/` 可用

### 4. 自定义域名（可选）
如果您有自定义域名：
1. 在仓库设置的 Pages 部分添加您的域名
2. 修改 `next.config.js` 中的 `basePath` 和 `assetPrefix` 为空字符串
3. 确保您的 DNS 设置正确指向 GitHub Pages

## 本地测试静态导出
```bash
npm run export
# 然后可以在 out/ 目录查看生成的静态文件
```

## 注意事项
- GitHub Pages 只支持静态网站，因此使用了 Next.js 的静态导出功能
- 图片优化已禁用 (`images.unoptimized: true`) 以兼容静态导出
- 如果使用了服务器端功能（API 路由、SSR），需要移除或替换为客户端实现

## 故障排除
- 如果部署失败，检查 GitHub Actions 页面的构建日志
- 确保所有依赖项都在 `package.json` 中正确声明
- 验证没有使用 Next.js 的服务器端特性
