"use client"
import Footer from "../footer"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  title?: string
  className?: string
  description?: string
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  description,
  className, 
  ...props 
}) => {
  const pathname = usePathname()

  return (
      <div 
        className={cn(
          "min-h-screen flex flex-col bg-background text-foreground antialiased",
          className
        )} 
        {...props}
      >
        
        <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {title && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <h1 
                className="text-4xl font-extrabold tracking-tight 
                  lg:text-5xl bg-gradient-to-r from-primary to-secondary 
                   bg-clip-text"
              >
                {title}
              </h1>
              {description && (
                <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </motion.div>
          )}
          
          <AnimatePresence mode="wait">
            <motion.main 
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {children}
            </motion.main>
          </AnimatePresence>
        </div>
        
        <Footer />
      </div>
  )
}

export default Layout