import { NavigationItem } from '../types/navigation';

export const navigationData: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    id: 'users',
    title: 'Quản lý người dùng',
    children: [
      {
        id: 'users-list',
        title: 'Danh sách người dùng',
        path: '/users/list',
      },
      {
        id: 'users-roles',
        title: 'Phân quyền',
        children: [
          {
            id: 'users-roles-admin',
            title: 'Quản trị viên',
            path: '/users/roles/admin',
          },
          {
            id: 'users-roles-editor',
            title: 'Biên tập viên',
            children: [
              {
                id: 'users-roles-editor-content',
                title: 'Quản lý nội dung',
                path: '/users/roles/editor/content',
              },
              {
                id: 'users-roles-editor-media',
                title: 'Quản lý media',
                children: [
                  {
                    id: 'users-roles-editor-media-images',
                    title: 'Hình ảnh',
                    path: '/users/roles/editor/media/images',
                  },
                  {
                    id: 'users-roles-editor-media-videos',
                    title: 'Video',
                    path: '/users/roles/editor/media/videos',
                  },
                ],
              },
            ],
          },
          {
            id: 'users-roles-viewer',
            title: 'Người xem',
            path: '/users/roles/viewer',
          },
        ],
      },
      {
        id: 'users-profile',
        title: 'Hồ sơ cá nhân',
        path: '/users/profile',
      },
    ],
  },
  {
    id: 'products',
    title: 'Sản phẩm',
    children: [
      {
        id: 'products-list',
        title: 'Danh sách sản phẩm',
        path: '/products/list',
      },
      {
        id: 'products-categories',
        title: 'Danh mục',
        children: [
          {
            id: 'products-categories-electronics',
            title: 'Điện tử',
            children: [
              {
                id: 'products-categories-electronics-phones',
                title: 'Điện thoại',
                children: [
                  {
                    id: 'products-categories-electronics-phones-iphone',
                    title: 'iPhone',
                    path: '/products/categories/electronics/phones/iphone',
                  },
                  {
                    id: 'products-categories-electronics-phones-samsung',
                    title: 'Samsung',
                    path: '/products/categories/electronics/phones/samsung',
                  },
                ],
              },
              {
                id: 'products-categories-electronics-laptops',
                title: 'Laptop',
                path: '/products/categories/electronics/laptops',
              },
            ],
          },
          {
            id: 'products-categories-fashion',
            title: 'Thời trang',
            path: '/products/categories/fashion',
          },
        ],
      },
    ],
  },
  {
    id: 'orders',
    title: 'Đơn hàng',
    children: [
      {
        id: 'orders-pending',
        title: 'Chờ xử lý',
        path: '/orders/pending',
      },
      {
        id: 'orders-completed',
        title: 'Hoàn thành',
        path: '/orders/completed',
      },
    ],
  },
  {
    id: 'settings',
    title: 'Cài đặt',
    children: [
      {
        id: 'settings-general',
        title: 'Cài đặt chung',
        path: '/settings/general',
      },
      {
        id: 'settings-security',
        title: 'Bảo mật',
        path: '/settings/security',
      },
    ],
  },
];