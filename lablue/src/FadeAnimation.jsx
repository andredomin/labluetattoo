const fadeAnimation = () => {
    const [opacity, setOpacity] = useState(0);
      
        useEffect(() => {
          const fadeElement = () => {
            setOpacity(1);
          }
      
          const animationDelay = setTimeout(fadeElement, 500);
      
          return () => clearTimeout(animationDelay);
        }, [])
}