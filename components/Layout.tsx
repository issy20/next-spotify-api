import { ReactNode, VFC } from 'react'

interface Props {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-mono items-center justify-center text-sm">
      {children}
    </div>
  )
}
