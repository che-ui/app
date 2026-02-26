/**
 * KimiBlog Framework - Configuration File
 * 类似Hexo的博客框架配置文件
 */

export interface BlogConfig {
  // 网站基本信息
  site: {
    title: string;
    subtitle: string;
    description: string;
    author: string;
    language: string;
    timezone: string;
    url: string;
    root: string;
    permalink: string;
    permalink_defaults: string;
    pretty_urls: {
      trailing_index: boolean;
      trailing_html: boolean;
    };
  };

  // 目录配置
  directory: {
    source_dir: string;
    public_dir: string;
    tag_dir: string;
    archive_dir: string;
    category_dir: string;
    code_dir: string;
    i18n_dir: string;
    skip_render: string[];
  };

  // 写作配置
  writing: {
    new_post_name: string;
    default_layout: string;
    titlecase: boolean;
    external_link: {
      enable: boolean;
      field: string;
      exclude: string[];
    };
    filename_case: number;
    render_drafts: boolean;
    post_asset_folder: boolean;
    relative_link: boolean;
    future: boolean;
    highlight: {
      enable: boolean;
      line_number: boolean;
      auto_detect: boolean;
      tab_replace: string;
      wrap: boolean;
      hljs: boolean;
    };
    prismjs: {
      enable: boolean;
      preprocess: boolean;
      line_number: boolean;
      tab_replace: string;
    };
  };

  // 首页配置
  index: {
    index_generator: {
      path: string;
      per_page: number;
      order_by: string;
    };
    archive_generator: {
      enabled: boolean;
      per_page: number;
      yearly: boolean;
      monthly: boolean;
      order_by: string;
    };
    category_generator: {
      per_page: number;
    };
    tag_generator: {
      per_page: number;
    };
  };

  // 主题配置
  theme: {
    name: string;
    sidebar: {
      position: 'left' | 'right';
      display: 'post' | 'always' | 'hide';
      padding: number;
      offset: number;
      onmobile: boolean;
    };
    toc: {
      enable: boolean;
      number: boolean;
      expand_all: boolean;
      max_depth: number;
    };
    fancybox: boolean;
    search: {
      local_search: {
        enable: boolean;
        trigger: string;
        top_n_per_article: number;
        unescape: boolean;
        preload: boolean;
      };
    };
  };

  // 部署配置
  deploy: {
    type: string;
    repo: string;
    branch: string;
    message: string;
  };

  // 其他配置
  meta: {
    keywords: string[];
    favicon: string;
    avatar: string;
    rss: boolean;
  };
}

// 默认配置
export const defaultConfig: BlogConfig = {
  site: {
    title: 'KimiBlog',
    subtitle: '一个轻量级博客框架',
    description: '基于React + TypeScript的现代博客框架',
    author: 'Kimi',
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    url: 'https://kimiblog.dev',
    root: '/',
    permalink: ':year/:month/:day/:title/',
    permalink_defaults: '',
    pretty_urls: {
      trailing_index: true,
      trailing_html: true,
    },
  },

  directory: {
    source_dir: 'source',
    public_dir: 'public',
    tag_dir: 'tags',
    archive_dir: 'archives',
    category_dir: 'categories',
    code_dir: 'downloads/code',
    i18n_dir: ':lang',
    skip_render: [],
  },

  writing: {
    new_post_name: ':title.md',
    default_layout: 'post',
    titlecase: false,
    external_link: {
      enable: true,
      field: 'site',
      exclude: [],
    },
    filename_case: 0,
    render_drafts: false,
    post_asset_folder: false,
    relative_link: false,
    future: true,
    highlight: {
      enable: true,
      line_number: true,
      auto_detect: false,
      tab_replace: '',
      wrap: true,
      hljs: false,
    },
    prismjs: {
      enable: false,
      preprocess: true,
      line_number: true,
      tab_replace: '',
    },
  },

  index: {
    index_generator: {
      path: '',
      per_page: 10,
      order_by: '-date',
    },
    archive_generator: {
      enabled: true,
      per_page: 10,
      yearly: true,
      monthly: true,
      order_by: '-date',
    },
    category_generator: {
      per_page: 10,
    },
    tag_generator: {
      per_page: 10,
    },
  },

  theme: {
    name: 'default',
    sidebar: {
      position: 'left',
      display: 'post',
      padding: 18,
      offset: 12,
      onmobile: false,
    },
    toc: {
      enable: true,
      number: true,
      expand_all: true,
      max_depth: 6,
    },
    fancybox: true,
    search: {
      local_search: {
        enable: true,
        trigger: 'auto',
        top_n_per_article: 1,
        unescape: false,
        preload: false,
      },
    },
  },

  deploy: {
    type: 'git',
    repo: '',
    branch: 'main',
    message: 'Site updated: {{ now("YYYY-MM-DD HH:mm:ss") }}',
  },

  meta: {
    keywords: ['blog', 'react', 'typescript', 'hexo-like'],
    favicon: '/favicon.ico',
    avatar: '/avatar.png',
    rss: true,
  },
};

// 用户自定义配置（可以覆盖默认配置）
export const userConfig: Partial<BlogConfig> = {
  site: {
    title: '我的博客',
    subtitle: '记录生活，分享技术',
    description: '这是一个使用KimiBlog框架搭建的个人博客',
    author: '博主',
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    url: 'https://example.com',
    root: '/',
    permalink: ':year/:month/:day/:title/',
    permalink_defaults: '',
    pretty_urls: {
      trailing_index: true,
      trailing_html: true,
    },
  },
};

// 合并配置
export const config: BlogConfig = {
  ...defaultConfig,
  ...userConfig,
  site: {
    ...defaultConfig.site,
    ...userConfig.site,
  },
  theme: {
    ...defaultConfig.theme,
    ...userConfig.theme,
  },
};

export default config;
