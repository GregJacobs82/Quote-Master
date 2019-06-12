// REFERENCE: https://marmelab.com/react-admin/Tutorial.html

// MAIN
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './components/posts';
import { UserList } from './components/users';
import Dashboard from './pages/Dashboard';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';

// ICONS
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

// DATA
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
import dataProvider from './dataProvider';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
);
export default App;