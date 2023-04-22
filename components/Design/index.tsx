import Image from 'next/image';

interface DesignProps {
  src: string;
  alt: string;
  position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
  className?: string;
}

const Design: React.FC<DesignProps> = (props) => {
  return (
    <div className={`${props.position} ${props.className}`}>
      <Image
        src={props.src}
        alt={props.alt}
        fill
      />
    </div>
  );
};

export default Design;
