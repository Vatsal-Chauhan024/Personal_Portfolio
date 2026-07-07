import { Constant } from "@/helpers"

type NavComponentProps = {
  className?: string
  onLinkClick?: (id: string) => void
}

const NavComponent = ({ className = "", onLinkClick }: NavComponentProps) => (
  <div
    className={`flex items-center gap-5 ${className}`}
    id="stagger_elements"
  >
    {Constant.NavArray.map(item => (
      <button
        className="basic_hover_animation px-4 text-primary hover:text-primary-light"
        key={item.id}
        onClick={() => onLinkClick?.(item.id)}
        type="button"
      >
        {item.name}
      </button>
    ))}
  </div>
)

export default NavComponent
