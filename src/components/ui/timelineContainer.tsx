interface Props {
    children: React.ReactNode
    className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={`${className} max-w-screen-md mx-auto pl-40 xl:px-0 py-6`}>{children}</div>
  )
}

export default Container