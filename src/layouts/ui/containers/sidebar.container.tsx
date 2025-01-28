import { JSX } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
import { MenuItem } from '@app/shared/types/sidebar.types'
import { cn } from '@app/shared/utils/shadcn.utils'

interface SidebarProps {
  isOpenSidebar: boolean
  setIsOpenSidebar: (open: boolean) => void
}

const menuItems: MenuItem[] = [
  {
    icon: 'House',
    label: 'Panel',
    path: FULL_ROUTE_PATHS.dashboard.root
  },
  {
    icon: 'CirclePlus',
    label: 'Crear nuevo rebate',
    path: FULL_ROUTE_PATHS.dashboard.createNewRebate
  },
  {
    icon: 'CalendarCheck',
    label: 'Vigentes',
    path: FULL_ROUTE_PATHS.dashboard.current
  },
  {
    icon: 'Hourglass',
    label: 'Pendiente aprobación',
    path: FULL_ROUTE_PATHS.dashboard.pendingApproval
  },
  {
    icon: 'CalendarClock',
    label: 'Pendiente pago',
    path: FULL_ROUTE_PATHS.dashboard.pendingPayment
  },
  {
    icon: 'PencilLine',
    label: 'Pendiente revisión',
    path: FULL_ROUTE_PATHS.dashboard.pendingReview
  },
  {
    icon: 'FileCheck',
    label: 'Pagados',
    path: FULL_ROUTE_PATHS.dashboard.paid
  }
]

/**
 * Sidebar container.
 */
export const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }: SidebarProps): JSX.Element => {
  const location = useLocation()

  const getIcon = (iconName: string): JSX.Element => {
    const icons = {
      CalendarCheck,
      CalendarClock,
      CirclePlus,
      FileCheck,
      Hourglass,
      House,
      Menu,
      PencilLine,
      X
    }

    const Icon = icons[iconName as keyof typeof icons]

    return <Icon className="h-5 w-5 transition-transform duration-200 hover:scale-110" />
  }

  const isActive = (path: string): boolean => {
    if (path === FULL_ROUTE_PATHS.dashboard.root) {
      return location.pathname === path
    }

    return location.pathname.startsWith(path)
  }

  const handleToggleSidebar = (): void => setIsOpenSidebar(!isOpenSidebar)

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
        onClick={handleToggleSidebar}
        role="button"
        tabIndex={0}
      >
        {!isOpenSidebar && getIcon('Menu')}

        {isOpenSidebar && (
          <>
            <span className="whitespace-nowrap text-sm">Cerrar</span>
            {getIcon('X')}
          </>
        )}
      </div>

      <Separator className={cn('w-3/5 bg-black/20', isOpenSidebar && 'w-full')} />

      <nav className="flex flex-col gap-2" role="navigation">
        {menuItems.map((item, index) => (
          <Link
            className={cn(
              'group relative flex items-center gap-4 rounded-lg p-3 transition-colors duration-200 hover:bg-secondary',
              isActive(item.path) && 'bg-secondary'
            )}
            key={`menu-item-${item.label}-${index}`}
            onClick={() => isOpenSidebar && setIsOpenSidebar(false)}
            to={item.path}
          >
            {getIcon(item.icon)}

            {isOpenSidebar && (
              <span className={cn('overflow-hidden whitespace-nowrap text-sm', isActive(item.path) && 'font-semibold')}>
                {item.label}
              </span>
            )}

            {!isOpenSidebar && (
              <span className="absolute left-full ml-4 w-max rounded-lg bg-black p-2 text-xs opacity-0 transition-opacity group-hover:opacity-100">
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
