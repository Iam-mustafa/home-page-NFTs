interface LayoutWrapperProps {
  children: React.ReactNode
}
const styles = {
  eclipseGradient: {
    background: 'linear-gradient(180deg, rgba(0, 195, 255, 0.34) 0%, #FF29C3 100%)',
    width: '1280px',
    height: '820px',
    borderRadius: '1280px',
    filter: 'blur(100px)',
    flexshrink: 0,
  },
  rectangleGradient: {
    background: 'linear-gradient(180deg, #184BFF00 0%, #174AFF 100%)',
    width: '616px',
    height: '559px',
    borderRadius: '16px', // Adjust as needed
    filter: 'blur(100px)',
    flexshrink: 0,
  },
};
export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="relative">
      {/* Persistent Gradients */}
      <div className="fixed inset-0 -z-10">
        {/* Eclipse Gradient */}
        <div style={styles.eclipseGradient} className="absolute" />
        {/* Rectangle Gradient */}
        <div className="absolute mt-40 inset-0 flex items-center justify-center">
          <div style={styles.rectangleGradient} />
        </div>
      </div>
      {children}
    </div>

  )
}
