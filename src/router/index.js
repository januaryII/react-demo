import {Home} from '../view/home/index';
import {User} from '../view/home/user-manage/index';
import {Region} from '../view/home/region-manage/index';
import {Hook} from '../view/home/hook/index';
// import {Authority} from '../view/home/authority-manage/index';
// import {Region} from '../view/home/hook/index';
export default [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
        path: '/home/user',
        name: 'user',
        component: User
    },
    {
        path: '/home/region',
        name: 'region',
        component: Region
    },
    // {
    //     path: '/home/authorityC',
    //     name: 'authority',
    //     component: Authority
    // },
    {
        path: '/home/hook',
        name: 'hook',
        component: Hook
    }
],
    auth: true//验证状态
}]