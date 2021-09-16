import { Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import React from 'react';
// @ts-ignore
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://jbox.sjtu.edu.cn/l/E11gDY');
        }}
      >
        <DownloadOutlined />
      </span>
      <Avatar menu />
    </Space>
  );
};

export default GlobalHeaderRight;
