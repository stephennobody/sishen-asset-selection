// 全局配置：Supabase 后端 + 项目注册表（后台 admin.html 用）
const CONFIG = {
  SUPABASE_URL: 'https://iyyefckzpqyzrxxusxjf.supabase.co',
  SUPABASE_KEY: 'sb_publishable__vD03KYbj0FwShT5dFBO4w_8u3l7qt5', // 可公开发布密钥（仅插入/查询 submissions 表）
  PROJECT_ID: 'sishen'
};

// 所有项目注册表：后台首页按此展示。新项目上线后往这里加一条即可。
const PROJECTS = [
  {
    id: 'sishen',
    zh: '死神之吻 · 人物资产选择（2.0）',
    vi: 'Nụ Hôn Tử Thần',
    url: './index.html',
    backend: true,            // 选择结果提交到 Supabase
    manifest: 'manifest.json',
    projectJson: 'project.json'
  },
  {
    id: 'meirenji',
    zh: '美人计 · 美术资产选择（1.0）',
    vi: 'Mỹ Nhân Kế',
    url: 'https://stephennobody.github.io/meirenji-asset-selection/',
    backend: false,           // 选择人自行导出 PDF，无后台数据
    note: '选择人自行导出 PDF 发微信群，后台无数据'
  },
  {
    id: 'meirenji_r2',
    zh: '美人计 · 男性角色面部方案（第二轮）',
    vi: 'Mỹ Nhân Kế · Vòng 2',
    url: 'https://stephennobody.github.io/meirenji-face-r2/',
    backend: true,
    manifest: 'manifest.json',
    projectJson: 'project.json'
  },
  {
    id: 'wenshen',
    zh: '纹身之神 · 人物资产选择',
    vi: 'Thần Hình Xăm',
    url: 'https://stephennobody.github.io/wenshen-asset-selection/',
    backend: true,
    manifest: 'manifest.json',
    projectJson: 'project.json'
  },
  {
    id: 'lottery330',
    zh: '330亿彩票 · 人物资产选择',
    vi: 'Vé Số 33 Tỷ',
    url: 'https://stephennobody.github.io/lottery330-asset-selection/',
    backend: true,
    manifest: 'manifest.json',
    projectJson: 'project.json'
  },
  {
    id: 'shenpan',
    zh: '审判游戏 · 人物资产选择',
    vi: 'Trò Chơi Phán Xét',
    url: 'https://stephennobody.github.io/shenpan-asset-selection/',
    backend: true,
    manifest: 'manifest.json',
    projectJson: 'project.json'
  }
];
