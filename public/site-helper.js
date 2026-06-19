// public/site-helper.js

(function () {
  'use strict';

  // 配置数据：网站说明、关键词、链接
  const siteConfig = {
    url: 'https://mofficial-hth.com.cn',
    keyword: '华体会',
    title: '华体会 — 官方提示',
    description: '这里为您提供最新的活动与功能指引，助您快速上手。'
  };

  // 提示卡片数据
  const tips = [
    { icon: '💡', text: '首次使用请先阅读下方说明。' },
    { icon: '🔒', text: '本页面仅用于信息展示，不收集个人数据。' },
    { icon: '📌', text: '关键词徽章可快速识别当前主题。' }
  ];

  // 生成提示卡片
  function createTipCard(data) {
    const card = document.createElement('div');
    card.className = 'tip-card';
    const iconSpan = document.createElement('span');
    iconSpan.className = 'tip-icon';
    iconSpan.textContent = data.icon;
    const textSpan = document.createElement('span');
    textSpan.className = 'tip-text';
    textSpan.textContent = data.text;
    card.appendChild(iconSpan);
    card.appendChild(textSpan);
    return card;
  }

  // 生成关键词徽章
  function createBadge(label) {
    const badge = document.createElement('span');
    badge.className = 'keyword-badge';
    badge.textContent = label;
    return badge;
  }

  // 生成访问说明区
  function buildAccessInfo() {
    const container = document.createElement('div');
    container.className = 'access-info';

    const heading = document.createElement('h3');
    heading.textContent = '访问说明';
    container.appendChild(heading);

    const list = document.createElement('ul');
    const items = [
      '本页面展示与 ' + siteConfig.keyword + ' 相关的提示信息。',
      '所有内容仅供学习参考，不涉及任何敏感操作。',
      '请通过官方渠道访问：' + siteConfig.url
    ];
    items.forEach(function (text) {
      const li = document.createElement('li');
      li.textContent = text;
      list.appendChild(li);
    });
    container.appendChild(list);

    return container;
  }

  // 组装所有组件并插入页面
  function initHelper() {
    // 创建标题
    const titleEl = document.createElement('h2');
    titleEl.textContent = siteConfig.title;
    titleEl.className = 'helper-title';

    // 创建描述
    const descEl = document.createElement('p');
    descEl.textContent = siteConfig.description;
    descEl.className = 'helper-desc';

    // 创建提示卡片容器
    const tipsContainer = document.createElement('div');
    tipsContainer.className = 'tips-container';
    tips.forEach(function (tip) {
      tipsContainer.appendChild(createTipCard(tip));
    });

    // 创建关键词徽章行
    const badgeRow = document.createElement('div');
    badgeRow.className = 'badge-row';
    badgeRow.appendChild(createBadge(siteConfig.keyword));
    badgeRow.appendChild(createBadge('官方'));
    badgeRow.appendChild(createBadge('提示'));

    // 创建访问说明
    const accessSection = buildAccessInfo();

    // 包装主容器
    const wrapper = document.createElement('div');
    wrapper.className = 'site-helper-wrapper';
    wrapper.appendChild(titleEl);
    wrapper.appendChild(descEl);
    wrapper.appendChild(tipsContainer);
    wrapper.appendChild(badgeRow);
    wrapper.appendChild(accessSection);

    // 追加到 body 末尾（可调整插入位置）
    document.body.appendChild(wrapper);
  }

  // 等待 DOM 加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHelper);
  } else {
    initHelper();
  }

})();