import { JSX } from 'react'
import { FilePen, FileUp, ListCheck } from 'lucide-react'

interface CreateAction {
  emphasis: string
  icon: JSX.Element
  text: string
}

const ICON_CLASSES = 'h-8 w-8 text-primary transition-transform duration-200 hover:scale-110'

const createActions: CreateAction[] = [
  {
    emphasis: 'manualmente',
    icon: <FilePen className={ICON_CLASSES} />,
    text: 'Crear'
  },
  {
    emphasis: 'archivo',
    icon: <FileUp className={ICON_CLASSES} />,
    text: 'Crear desde'
  },
  {
    emphasis: 'línea/depto',
    icon: <ListCheck className={ICON_CLASSES} />,
    text: 'Crear por'
  }
]

/**
 * Create actions container.
 */
export const CreateActionsContainer = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-primary">Selecciona una opción</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,250px)]">
        {createActions.map((action, index) => (
          <div
            className="flex flex-col gap-4 rounded-lg border border-border bg-white p-6 shadow-sm hover:border-primary"
            key={index}
          >
            {action.icon}

            <p>
              {action.text} <strong>{action.emphasis}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
