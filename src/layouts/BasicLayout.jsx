/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout from '@ant-design/pro-layout';
import React, { useEffect, useRef } from 'react';
import { Link, useIntl, connect, history } from 'umi';
import RightContent from '@/components/GlobalHeader/RightContent';

import PWTFooter from "@/components/GlobalFooter/DefaultFooter";

const BasicLayout = (props) => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;
  const menuDataRef = useRef([]);
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);
  /**
   * init variables
   */

  const handleMenuCollapse = (payload) => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const { formatMessage } = useIntl();

  const menuDataRender = (menuList) =>
    menuList.map((item) => {
      const localItem = {
        ...item,
        name: item.name ? formatMessage({id: item.name}) : undefined,
        children: item.children ? menuDataRender(item.children) : undefined,
      };
      return localItem;
    });

  return (
    <ProLayout
      title="Super Web Tools"
      logo={false}
      layout="top"
      navTheme="light"
      fixedHeader={true}
      formatMessage={formatMessage}
      contentWidth="Fluid"
      contentStyle={{
        background: '#FFF',
        margin:'0px'
      }}
      onCollapse={handleMenuCollapse}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      // breadcrumbRender={(routers = []) => [
      //   {
      //     path: '/',
      //     breadcrumbName: formatMessage({
      //       id: 'menu.home',
      //     }),
      //   },
      //   ...routers,
      // ]}
      breadcrumbRender={()=>{}}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={() => <PWTFooter/>}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContent />}
      postMenuData={(menuData) => {
        menuDataRef.current = menuData || [];
        return menuData || [];
      }}
      {...props}
      {...settings}
    >
      {children}
    </ProLayout>
  );
};

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
