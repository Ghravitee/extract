interface Props {
    children: React.ReactNode
    className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={`${className} max-w-screen-lg mx-auto px-4 xl:px-0 py-6`}>{children}</div>
  )
}

export default Container