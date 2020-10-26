import {GithubOutlined} from '@ant-design/icons';
import React from 'react';
import {DefaultFooter} from "@ant-design/pro-layout";

export default function PWTFooter (props){
  return (
    <DefaultFooter
      copyright={`${new Date().getFullYear()} PureWebTools`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Mayazure/superwebtool',
          blankTarget: true,
        }
      ]}
    />
  )
};

