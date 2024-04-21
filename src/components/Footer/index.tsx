import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '踌躇出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'gitee',
          title: '个人地址',
          href: 'https://gitee.com/l_hai',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />踌躇 GitHub</>,
          href: 'https://github.com/llihaha',
          blankTarget: true,
        },
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://docs.qq.com/doc/DUG93dVNHbVZjZXpo',
          blankTarget: true,
        }
      ]}
    />
  );
};
export default Footer;
