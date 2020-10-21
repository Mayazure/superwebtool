import {GithubOutlined} from '@ant-design/icons';
import React from 'react';
import {DefaultFooter} from "@ant-design/pro-layout";

export default function PWTFooter (props){
  return (
    <DefaultFooter
      copyright={`${new Date().getFullYear()} PureWebTools`}
      links={[
        // {
        //   key: 'Ant Design Pro',
        //   title: 'Ant Design Pro',
        //   href: 'https://pro.ant.design',
        //   blankTarget: true,
        // },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Mayazure/superwebtool',
          blankTarget: true,
        },
        // {
        //   key: 'Ant Design',
        //   title: 'Ant Design',
        //   href: 'https://ant.design',
        //   blankTarget: true,
        // },
      ]}
    />
  )
};

