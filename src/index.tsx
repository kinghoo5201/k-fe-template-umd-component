// _IRIM_PROJECT_NAME_
// @author _IRIM_AUTHOR_ <_IRIM_EMAIL_>
// @create _IRIM_GMT_CREATE_

import * as React from 'react';
import isNil from 'lodash/isNil';
import './index.less';

export interface ITestCompProps {}

/**
 * TestComp
 * @description 测试组件
 * @author kinghoo
 * @version 0.1.0
 * @create 2021-08-13 20:38
 */
const TestComp: React.FC<ITestCompProps> = (props) => {
  return <div>{JSON.stringify(isNil(null))}测试组件</div>;
};

export default TestComp;
