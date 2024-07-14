import type { TypographyProps } from '@/components/Typography';
import Typography from '@/components/Typography';

interface LabelProps {
    variant?: 'default';
    text?: TypographyProps['size'];
    className?: string; // Optional styling for extend or overwrite default styles.
    title: string;
}

const Label: React.FC<LabelProps> = ({ variant = 'default', text = 'sm', ...props }) => {
  return (
    <>
      {
        props.title && <>
          {
            variant === 'default' && <Typography
              content={props.title}
              size={text}
              tag='span'
              className={`flex px-4 py-2 justify-center items-center font-pier-sans text-neutral-200 border rounded-lg border-neutral-700 hover:bg-neutral-700 transition-colors ease-in-out duration-300 ${props.className}`}
            />
          }
        </>
      }
    </>
  );
};

export default Label;
