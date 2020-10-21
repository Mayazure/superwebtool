import React from 'react';
import { SelectLang } from 'umi';
import styles from './index.less';
import LocaleSelector from "@/components/GlobalHeader/LocaleSelector";

const GlobalHeaderRight = (props) => {
  let className = styles.right;

  return (
    <div>
      {/*<SelectLang className={styles.action} />*/}
      <LocaleSelector/>
    </div>
  );
};

export default GlobalHeaderRight;
