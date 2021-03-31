"use strict";
exports.__esModule = true;
exports.sideNavItems = exports.sideNavSections = void 0;
exports.sideNavSections = [
    /*{
        text: 'CORE',
        items: ['dashboard'],
    },*/
    {
        text: ' ',
        items: ['dashboard', 'sales', 'inventory', 'purchasing', 'report', 'accounting', 'marketing', 'hrm', 'settings']
    },
];
exports.sideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard'
    },
    sales: {
        icon: 'columns',
        text: 'Sales',
        submenu: [
            {
                text: 'Payment',
                link: '/dashboard'
            },
            {
                text: 'Sales Order',
                link: '/dashboard'
            },
            {
                text: 'Product & Services',
                link: '/sales/products'
            },
            {
                text: 'Invoice',
                link: '/dashboard'
            },
            {
                text: 'Customers',
                link: '/sales/customers'
            },
            {
                text: 'Delivery Note',
                link: '/dashboard'
            },
            {
                text: 'Price',
                link: '/sales/price'
            },
            {
                text: 'Credit Memo',
                link: '/dashboard'
            },
            {
                text: 'Sales Receipt',
                link: '/dashboard'
            },
        ]
    },
    inventory: {
        icon: 'book-open',
        text: 'Inventory',
        submenu: [
            {
                text: 'Stocks',
                link: '/dashboard'
            },
            {
                text: 'Storage Location',
                link: '/dashboard'
            },
        ]
    },
    purchasing: {
        icon: 'book-open',
        text: 'Purchasing',
        submenu: [
            {
                text: 'E-Invoice',
                link: '/dashboard'
            },
            {
                text: 'Receipts',
                link: '/dashboard'
            },
            {
                text: 'App Uploads',
                link: '/dashboard'
            },
            {
                text: 'Vendor',
                link: '/dashboard'
            },
            {
                text: 'Expense',
                link: '/dashboard'
            },
            {
                text: 'Purchase Order',
                link: '/dashboard'
            },
            {
                text: 'Bill',
                link: '/dashboard'
            },
            {
                text: 'Receive Note',
                link: '/dashboard'
            },
        ]
    },
    report: {
        icon: 'book-open',
        text: 'Report',
        submenu: [
            {
                text: 'Stock',
                link: '/dashboard'
            },
            {
                text: 'Payment Report',
                link: '/dashboard'
            },
            {
                text: 'Invoice',
                link: '/dashboard'
            },
            {
                text: 'Customer',
                link: '/dashboard'
            },
            {
                text: 'Product',
                link: '/dashboard'
            },
            {
                text: 'Statement',
                link: '/dashboard'
            },
            {
                text: 'Unpaid Invoices',
                link: '/dashboard'
            },
        ]
    },
    accounting: {
        icon: 'book-open',
        text: 'Accounting',
        submenu: [
            {
                text: 'Transaction',
                link: '/dashboard'
            },
            {
                text: 'Journal',
                link: '/dashboard'
            },
            {
                text: 'Balance Sheet',
                link: '/dashboard'
            },
            {
                text: 'Accounts',
                link: '/dashboard'
            },
            {
                text: 'Profit & Loss',
                link: '/dashboard'
            },
        ]
    },
    marketing: {
        icon: 'book-open',
        text: 'Marketing',
        submenu: [
            {
                text: 'Email',
                link: '/dashboard'
            },
        ]
    },
    hrm: {
        icon: 'book-open',
        text: 'HRM',
        submenu: [
            {
                text: 'Timesheet',
                link: '/dashboard'
            },
            {
                text: 'Display',
                link: '/dashboard'
            },
            {
                text: 'Employee',
                link: '/dashboard'
            },
            {
                text: 'Setting',
                link: '/dashboard'
            },
            {
                text: 'Employee-Data',
                link: '/dashboard'
            },
            {
                text: 'Report',
                link: '/dashboard'
            },
        ]
    },
    settings: {
        icon: 'book-open',
        text: 'Settings',
        submenu: [
            {
                text: 'Manage User',
                link: '/dashboard'
            },
            {
                text: 'Apps',
                link: '/dashboard'
            },
            {
                text: 'General Settings',
                link: '/dashboard'
            },
            {
                text: 'Company',
                link: '/dashboard'
            },
            {
                text: 'Subscription',
                link: '/dashboard'
            },
            {
                text: 'Template',
                link: '/dashboard'
            },
        ]
    }
};
