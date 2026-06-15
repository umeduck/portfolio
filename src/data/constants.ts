// 公開用データ。本名・メールアドレス・企業名は含めない。
// 完全版は private-data.json(gitignore対象)で管理し、暗号化して配信する。
export const PROFILE = {
  name: 'Umemura',
  nameEn: 'Umemura',
  title: 'システムエンジニア / 個人開発者',
  titleEn: 'Software Engineer / Independent Developer',
  bio: '業務改善・Web開発・AWS運用を軸に、事業とシステムの間にある複雑な課題を整理し、前に進めるエンジニアです。',
}

export const LINKS = {
  github: 'https://github.com/umeduck',
  twitter: 'https://x.com/crow_note_2026',
  email: '',
  crownoteLp: 'https://lp.crow-note.net',
}

export const SKILLS = [
  {
    category: 'Backend',
    items: ['Ruby on Rails', 'PHP (Zend Framework)', 'SQL / MySQL', 'API設計 (Swagger/OpenAPI)'],
  },
  {
    category: 'Frontend',
    items: ['Vue 3', 'TypeScript', 'JavaScript', 'Vite'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS ECS/Fargate', 'Amazon ECR', 'Amazon S3', 'CloudFront', 'Amazon Cognito', 'Route53', 'ACM', 'CloudWatch', 'RDS / Aurora MySQL', 'Docker'],
  },
  {
    category: 'Business / Management',
    items: ['要件定義', '基本設計', '詳細設計', 'テスト設計', 'リリース管理', '障害調査・再発防止', '業務改善', 'コスト削減', 'チームマネジメント'],
  },
]

export const ACHIEVEMENTS = [
  {
    icon: '💰',
    title: 'AWSコスト最適化',
    description: '駐車場管理システムのAWS利用状況を分析し、S3運用ルールを見直すことで年間約560万円のコスト削減を実現。',
  },
  {
    icon: '🅿️',
    title: '駐車場管理システムの開発・運用保守',
    description: '全国の駐車場を管理するシステムについて、要件定義から設計・実装・テスト・リリース・運用保守まで一貫して担当。',
  },
  {
    icon: '🚀',
    title: 'データベースパフォーマンス改善',
    description: 'MySQLの実行計画分析とインデックス改善を実施し、システム性能向上とサーバー負荷軽減に貢献。',
  },
  {
    icon: '🔍',
    title: '障害調査・再発防止',
    description: 'ログ・SQL・ソースコード解析により本番障害の原因を特定。修正対応に加え再発防止策の提案まで担当。',
  },
  {
    icon: '🤝',
    title: 'フリーランスメンバーのマネジメント',
    description: 'フリーランスエンジニア最大2名の進捗管理・技術支援を担当し、プロジェクト推進と品質向上に貢献。',
  },
  {
    icon: '🔄',
    title: '既存システムへの Vue.js 導入',
    description: '自社Webサービスへの段階的なVue.js移行を担当。導入時に発生したCORS問題を調査・解消。',
  },
  {
    icon: '📄',
    title: 'API定義書（Swagger）整備',
    description: '既存会計システムのPHPソースコードを解析しAPI仕様を整理。Swagger(OpenAPI)による定義書を作成し保守性・開発効率を向上。',
  },
  {
    icon: '🤖',
    title: '生成AIを活用した開発効率化',
    description: 'Claude CodeやChatGPTを活用し、設計・実装・調査・ドキュメント作成業務を効率化。',
  },
]

export const PROJECTS = [
  {
    id: 'crownote',
    name: 'CrowNote',
    tagline: '人生を検索する',
    description: '録音した会話を文字起こしし、あとから検索できる個人開発サービス。「人生を検索する」をコンセプトに、企画・開発・AWSインフラ構築・運営まで一人で担当。',
    background: '会話の中で生まれたアイデアや約束、思考の断片が記録されずに流れていってしまうことに課題を感じ、個人開発をスタート。録音データを文字起こしし、検索可能な形で蓄積することで、過去の会話を資産として活用できる仕組みを目指している。',
    problem: '日常の会話には価値ある情報が多く含まれているが、後から「あの話、どこでしたっけ」と探す手段がない。メモを取る習慣がない人でも、自然に記録・検索できる仕組みが必要。',
    vision: '文字起こし精度の向上やAIによる要約・タグ付けを強化し、「会話を資産化する」体験をより多くの人に届けられるプロダクトへ成長させる。',
    stack: ['Ruby on Rails (API)', 'Vue.js', 'MySQL', 'Docker', 'AWS ECS/Fargate', 'Amazon Cognito', 'GitHub Actions'],
    link: 'https://lp.crow-note.net',
  },
]

export const CAREER = [
  {
    period: '2023.01 - 2023.06',
    title: 'Web系事業会社 入社／自社占いアプリ開発',
    description: '自社占いアプリの実装を担当。占いAPIを使用し、CakePHPでMVCを実装。フロントエンドはjQueryでアニメーションを作成し、途中からはjQueryからVue.jsへの移行にも携わった。',
  },
  {
    period: '2023.07 - 2023.11',
    title: 'SES案件／会計システムAPI定義書作成',
    description: 'SESとして会計システムの開発案件に参画。LaravelのソースコードをもとにAPI仕様を整理し、Swagger(OpenAPI)によるAPI定義書を作成。',
  },
  {
    period: '2023.12 - 2024.06',
    title: 'SES案件／採用支援システムの運用・保守',
    description: 'PHP(Zend Framework)で構築された採用支援システムの運用・保守を担当。',
  },
  {
    period: '2024.07 - 2025.01',
    title: '採用支援システムのリニューアル開発',
    description: '同プロジェクトにて、既存パッケージのリニューアル開発を担当。Laravel・Reactへの技術移行を実施。',
  },
  {
    period: '2025.02 - 現在',
    title: '事業会社へ転職／ナンバー認識型駐車場管理システム開発',
    description: 'ナンバー認識型駐車場管理システムを手掛ける企業へ転職。S3運用見直しによる大規模コスト削減、GitHub Actionsを用いたAWS ECS・S3/CloudFrontへのCI/CD構築、画像認識AI基盤へのオートスケーリング導入、駐車場管理者向け管理UIの開発に従事。駐車場管理システムの要件定義から開発・テストまでをPL（プロジェクトリーダー）として推進。',
  },
  {
    period: '継続中',
    title: '個人開発 CrowNote の企画・開発・運営',
    description: '「人生を検索する」をコンセプトに、会話を録音・文字起こしして検索できるサービスを企画・開発・AWSインフラ構築・運営まで一人で実施。',
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
