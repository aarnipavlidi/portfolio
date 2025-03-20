import { FragmentType, getFragmentData } from '@/types/hygraph';
import documents from '@/hygraph/fragments/documents';
import parse from 'html-react-parser';

interface RichTextProps {
  wrapperClass?: string;
  className?: string;
}

interface RichTextPrimaryProps extends RichTextProps {
  variant: 'RichText'
  content?: FragmentType<typeof documents.richText>;
}

interface RichTextSecondaryProps extends RichTextProps {
  variant: 'SingleLineText' | 'MultiLineText'
  content?: string;
}

const RichText: React.FC<RichTextPrimaryProps | RichTextSecondaryProps> = (props) => {

  if (props.variant === 'RichText') {
    const getRichTextContent = getFragmentData(documents.richText, props.content);
    console.log('RichText', getRichTextContent?.text, getRichTextContent?.text.length, getRichTextContent?.text === '');

    const checkContentExist = getRichTextContent && getRichTextContent.text !== '';

    return (
      <>
        {
          checkContentExist && <div className={`font-pier-sans prose ${props.wrapperClass}`}>
            {parse(getRichTextContent.html)}
          </div>
        }
      </>
    );


  }

  return null;
};

export default RichText;