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
    }
  }
]

