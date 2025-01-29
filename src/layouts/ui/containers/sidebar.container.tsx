import { JSX } from 'react'
import { Link } from 'react-router-dom'
import {
  CalendarCheck,
  CalendarClock,
  CirclePlus,
  FileCheck,
  Hourglass,
  House,
  Menu,
  PencilLine,
  X
} from 'lucide-react'

import { Separator } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { cn } from '@app/shared/utils/shadcn.utils'

interface MenuItem {
  icon: JSX.Element
  label: string
  path: string
}

interface SidebarProps {
  isMenuActive: (path: string) => boolean
  isOpenSidebar: boolean
  onCloseSidebar: () => void
  onToggleSidebar: () => void
}

const ICON_CLASS = 'h-5 w-5 transition-transform duration-200 hover:scale-110'

const menuItems: MenuItem[] = [
  {
    icon: <House className={ICON_CLASS} />,
    label: 'Panel',
    path: FULL_ROUTE_PATHS.dashboard.root
  },
  {
    icon: <CirclePlus className={ICON_CLASS} />,
    label: 'Crear nuevo rebate',
    path: FULL_ROUTE_PATHS.dashboard.createNewRebate
  },
  {
    icon: <CalendarCheck className={ICON_CLASS} />,
    label: 'Vigentes',
    path: FULL_ROUTE_PATHS.dashboard.currentRebate
  },
  {
    icon: <Hourglass className={ICON_CLASS} />,
    label: 'Pendiente aprobación',
    path: FULL_ROUTE_PATHS.dashboard.pendingApprovalRebate
  },
  {
    icon: <CalendarClock className={ICON_CLASS} />,
    label: 'Pendiente pago',
    path: FULL_ROUTE_PATHS.dashboard.pendingPaymentRebate
  },
  {
    icon: <PencilLine className={ICON_CLASS} />,
    label: 'Pendiente revisión',
    path: FULL_ROUTE_PATHS.dashboard.pendingReviewRebate
  },
  {
    icon: <FileCheck className={ICON_CLASS} />,
    label: 'Pagados',
    path: FULL_ROUTE_PATHS.dashboard.paidRebate
  }
]

/**
 * Sidebar container.
 */
export const Sidebar = ({
  isMenuActive,
  isOpenSidebar,
  onCloseSidebar,
  onToggleSidebar
}: SidebarProps): JSX.Element => {
  return (
    <aside
      className={cn(
        'fixed bottom-0 left-0 top-[var(--topbar-height)] z-50 flex flex-col gap-4 bg-primary text-white transition-all duration-300',
        isOpenSidebar ? 'w-sidebar p-4' : 'w-sidebarIcon items-center py-4'
      )}
    >
      <div
        className={cn(
          'flex rounded-lg p-3 transition-colors duration-200 hover:bg-black',
          isOpenSidebar && 'gap-2 self-end'
        )}
        onClick={onToggleSidebar}
        role="button"
        tabIndex={0}
      >
        {isOpenSidebar ? (
          <>
            <span className="whitespace-nowrap text-sm">Cerrar</span>
            <X className={ICON_CLASS} />
          </>
        ) : (
          <Menu className={ICON_CLASS} />
        )}
      </div>

      <Separator className={cn('w-3/5 bg-black/20', isOpenSidebar && 'w-full')} />

      <nav className="flex flex-col gap-2" role="navigation">
        {menuItems.map((item, index) => (
          <Link
            className={cn(
              'group relative flex items-center gap-4 rounded-lg p-3 transition-colors duration-200 hover:bg-secondary',
              isMenuActive(item.path) && 'bg-secondary'
            )}
            key={`menu-item-${item.label}-${index}`}
            onClick={() => isOpenSidebar && onCloseSidebar()}
            to={item.path}
          >
            {item.icon}

            {isOpenSidebar ? (
              <span
                className={cn(
                  'overflow-hidden whitespace-nowrap text-sm',
                  isMenuActive(item.path) && 'font-semibold'
                )}
              >
                {item.label}
              </span>
            ) : (
              <span className="none absolute left-full ml-3 hidden w-max rounded-md bg-black px-3 py-2 text-xs opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>

      <Separator className={cn('w-3/5 bg-black/20', isOpenSidebar && 'w-full')} />
    </aside>
  )
}
