import type { RouteRecord } from '@/types/router.types'
import { useI18n } from 'vue-i18n'

export const accountRoutes: RouteRecord[] = [
  {
    path: '/account',
    name: 'Account',
    redirect: { name: 'NtdAcct' },
    components: {
      header: () => import('@/components/layout/Header.vue'),
      default: () => import('@/views/account/Account.vue'),
      footer: () => import('@/components/layout/Navigator.vue')
    },
    props: {
      header: () => {
        const { t } = useI18n()
        return {
          title: t('銀行帳號')
        }
      }
    },
    meta: {
      requiresAuth: true,
      highlight: 'Account'
    },
    children: [
      {
        path: 'ntd-account',
        name: 'NtdAcct',
        component: () => import('@/views/account/NtdAcct/NtdAcct.vue')
      },
      {
        path: 'fx-account',
        name: 'FXAcct',
        component: () => import('@/views/account/FXAcct/FXAcct.vue')
      },
      {
        path: 'ck-account',
        name: 'CKAcct',
        component: () => import('@/views/account/CKAcct/CKAcct.vue')
      },
      {
        path: 'cd-account',
        name: 'CDAcct',
        component: () => import('@/views/account/CDAcct/CDAcct.vue')
      },
      {
        path: 'loan-account',
        name: 'LoanAcct',
        component: () => import('@/views/account/LoanAcct/LoanAcct.vue')
      }
    ]
  },
  {
    path: '/account/ntd-account/overview/:acct',
    name: 'NtdAcctDash',
    props: {
      header: () => {
        const { t } = useI18n()
        return {
          title: t('帳戶總覽')
        }
      }
    },
    components: {
      header: () => import('@/components/layout/NavigationHeader.vue'),
      default: () => import('@/views/account/NtdAcctDash/NtdAcctDash.vue')
    },
    meta: {
      requiresAuth: true,
      transition: 'slide'
    }
  },
  {
    path: '/account/ntd-account/detail/:acct',
    name: 'NtdAcctDetail',
    props: {
      header: () => {
        const { t } = useI18n()
        return {
          title: t('帳戶詳情')
        }
      }
    },
    components: {
      header: () => import('@/components/layout/NavigationHeader.vue'),
      default: () => import('@/views/account/NtdAcctDetail/NtdAcctDetail.vue')
    },
    meta: {
      requiresAuth: true,
      transition: 'slide'
    }
  },
  {
    path: '/account/ntd-account/tran-detail/:data',
    name: 'NtdTransDetail',
    props: {
      header: () => {
        const { t } = useI18n()
        return {
          title: t('交易明細')
        }
      }
    },
    components: {
      header: () => import('@/components/layout/NavigationHeader.vue'),
      default: () => import('@/views/account/NtdTransDetail/NtdTransDetail.vue')
    },
    meta: {
      requiresAuth: true,
      transition: 'slide'
    }
  },
  {
    path: '/account/ntd-transfer',
    name: 'NtdTransfer',
    redirect: { name: 'BankTrans' },
    props: {
      header: () => {
        const { t } = useI18n()
        return {
          title: t('台幣轉帳')
        }
      }
    },
    components: {
      header: () => import('@/components/layout/NavigationHeader.vue'),
      default: () => import('@/views/account/NtdTransfer/NtdTransfer.vue')
    },
    children: [
      {
        path: 'bank-trans',
        name: 'BankTrans',
        redirect: { name: 'BankTransInput' },
        component: () => import('@/views/account/NtdTransfer/BankTrans/BankTransLayout.vue'),
        children: [
          { path: 'input', name: 'BankTransInput', component: () => import('@/views/account/NtdTransfer/BankTrans/BankTransInput.vue') },
          { path: 'confirm', name: 'BankTransConfirm', component: () => import('@/views/account/NtdTransfer/BankTrans/BankTransConfirm.vue') },
          { path: 'result', name: 'BankTransResult', component: () => import('@/views/account/NtdTransfer/BankTrans/BankTransResult.vue') }
        ]
      },
      {
        path: 'mobile-trans',
        name: 'MobileTrans',
        component: () => import('@/views/account/NtdTransfer/MobileTrans/MobileTrans.vue')
      }
    ],
    meta: {
      requiresAuth: true,
      transition: 'slide'
    }
  }
]

