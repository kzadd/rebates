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
import { MenuItem } from '@app/shared/types/sidebar.types'
import { cn } from '@app/shared/utils/shadcn.utils'

interface SidebarProps {
  isOpenSidebar: boolean
  setIsOpenSidebar: (open: boolean) => void
}

const COMMON_BUTTON_CLASSES =
  'flex cursor-pointer items-center gap-4 rounded-lg p-3 transition-colors duration-200 hover:bg-secondary'

const COMMON_TEXT_CLASSES = 'whitespace-nowrap text-sm leading-[normal] tracking-wide'

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
 * Sidebar.
 */
export const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }: SidebarProps): JSX.Element => {
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

    return <Icon className="h-5 w-6 flex-shrink-0 transition-transform duration-200 hover:scale-110" />
  }

  const handleToggleSidebar = (): void => setIsOpenSidebar(!isOpenSidebar)

  return (
    <aside
      className={cn(
        'fixed bottom-0 left-0 top-[var(--topbar-height)] z-50 flex flex-col gap-6 bg-primary text-white shadow-lg transition-all duration-300',
        isOpenSidebar ? 'w-sidebar p-8' : 'w-sidebarIcon items-center py-8'
      )}
    >
      <div
        aria-label={isOpenSidebar ? 'Cerrar menú' : 'Abrir menú'}
        className={cn(COMMON_BUTTON_CLASSES, isOpenSidebar && 'w-fit self-end gap-1', 'hover:bg-black')}
        onClick={handleToggleSidebar}
        role="button"
        tabIndex={0}
      >
        {!isOpenSidebar && getIcon('Menu')}

        {isOpenSidebar && (
          <>
            <span className={COMMON_TEXT_CLASSES}>Cerrar</span>
            {getIcon('X')}
          </>
        )}
      </div>

      <Separator className={cn('w-3/5 bg-black/20', isOpenSidebar && 'w-full')} />

      <nav
        aria-label="Menú principal"
        className={cn('flex flex-col gap-2', !isOpenSidebar && 'items-center')}
        role="navigation"
      >
        {menuItems.map((item, index) => (
          <Link
            aria-label={item.label}
            className={cn(COMMON_BUTTON_CLASSES, 'relative group')}
            key={`menu-item-${item.label}-${index}`}
            onClick={isOpenSidebar ? () => setIsOpenSidebar(false) : undefined}
            to={item.path}
          >
            {getIcon(item.icon)}
            {isOpenSidebar && <span className={cn(COMMON_TEXT_CLASSES, 'overflow-hidden')}>{item.label}</span>}

            {!isOpenSidebar && (
              <span className="absolute left-full ml-3 w-max rounded-md bg-black px-3 py-2 text-xs opacity-0 transition-opacity group-hover:opacity-100">
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
