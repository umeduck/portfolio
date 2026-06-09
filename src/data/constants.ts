export const PROFILE = {
  name: '梅村',
  nameEn: 'Umemura',
  title: 'システムエンジニア / 個人開発者',
  titleEn: 'Software Engineer / Independent Developer',
  bio: '業務改善・Web開発・AWS運用を軸に、事業とシステムの間にある複雑な課題を整理し、前に進めるエンジニアです。',
}

export const LINKS = {
  github: 'https://github.com/your-username',
  twitter: 'https://x.com/your-username',
  email: 'mailto:your@email.com',
  crownoteLp: 'https://crownote.example.com',
}

export const SKILLS = [
  {
    category: 'Backend',
    items: ['Ruby on Rails', 'SQL', 'API設計'],
  },
  {
    category: 'Frontend',
    items: ['Vue 3', 'TypeScript', 'Vite'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'ECS', 'S3', 'CloudWatch', 'RDS', 'Lambda'],
  },
  {
    category: 'Business / Management',
    items: ['要件定義', '基本設計', 'テスト設計', 'リリース管理', '業務改善', 'コスト削減'],
  },
]

export const ACHIEVEMENTS = [
  {
    icon: '💰',
    title: 'AWS S3 コスト削減',
    description: '不要ファイルの整理・ストレージクラス最適化などにより、年間約736万円規模のコスト削減を実現。',
  },
  {
    icon: '🅿️',
    title: '駐車場管理システムの開発・保守・改善',
    description: '駐車場業務に特化したシステムの新機能開発から保守・改善まで一貫して担当。',
  },
  {
    icon: '📊',
    title: 'CloudWatch を活用した EC2 監視設計',
    description: 'CloudWatch Alarms・Logs・Dashboards を組み合わせた監視基盤を設計・構築。',
  },
  {
    icon: '🛠️',
    title: 'Rails / Vue を用いた業務システム開発',
    description: 'バックエンド（Rails）とフロントエンド（Vue）を組み合わせた業務システムを開発。',
  },
  {
    icon: '📋',
    title: '要件定義からリリースまでの一貫担当',
    description: 'ヒアリング・要件定義・設計・実装・テスト・リリースまで、全工程を主体的に推進。',
  },
]

export const PROJECTS = [
  {
    id: 'crownote',
    name: 'CrowNote',
    tagline: '人生の検索エンジン',
    description: '会話・思考・メモを保存し、あとから検索できるパーソナルナレッジベース。「あの時考えたこと」をいつでも引き出せる場所を目指して開発中。',
    background: '日常の会話やひらめきが記録されずに消えていく課題を感じ、個人で開発を開始。AIと組み合わせることで、単なるメモ以上の価値を提供したいと考えている。',
    problem: '人間の思考・会話は揮発性が高く、後から参照しようとしても探せない。既存のメモアプリは「書く手間」が大きく、日常的に継続しにくい。',
    vision: 'AIによる自動タグ付け・要約・関連情報の提示を強化し、ユーザーの「思考の外部化」を支援するプロダクトへ進化させる。',
    stack: ['Ruby on Rails', 'Vue 3', 'AWS', 'AI活用'],
    link: 'https://crownote.example.com',
  },
]

export const CAREER = [
  {
    period: '現在',
    title: '個人開発 CrowNote の開発・運営',
    description: 'パーソナルナレッジベース「CrowNote」を個人で設計・開発・運営。',
  },
  {
    period: '直近',
    title: 'AWSコスト削減・監視改善',
    description: 'S3ストレージ最適化による大規模コスト削減、CloudWatchを活用した監視基盤の設計・構築。',
  },
  {
    period: '業務',
    title: '駐車場管理システムの開発・保守',
    description: '駐車場業務システムの機能開発・保守・改善を担当。要件定義からリリースまで一貫して対応。',
  },
  {
    period: '経験',
    title: 'Web系システム開発・運用',
    description: 'Rails / Vue を中心としたWebシステムの開発・運用。設計から実装・テストまで幅広く対応。',
  },
]

export const NAV_ITEMS = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Career',       href: '#career' },
  { label: 'Contact',      href: '#contact' },
]
