import type { CustomMasksProps, CustomMaskVariantType } from '@/types/masks';

const Masks: React.FC<CustomMasksProps> = ({ id, variant, ...props }) => {

  const getMaskMetaID = props.uid;
  const getMaskVariant: CustomMaskVariantType = variant ? variant as CustomMaskVariantType : 'avatar';

  return (
    <svg
      id={getMaskMetaID ? `${getMaskMetaID}${id}` : `${id}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1 1"
      className="masks-container"
      {...props}
    >
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id={id}>
          {
            getMaskVariant === 'avatar' && <path
              d="M1 0H0v1h1V0ZM.12.08H.08v.04h.04V.08ZM.16.2V.12H.2V.2H.16ZM.12.16h.04V.2H.12V.16Zm.64.6H.72V.8h.04V.76ZM.8.8h.04v.04H.8V.8H.76V.76H.8V.8ZM.72.72H.68v.04h.04V.72ZM.8.68h.04v.04H.8V.68Z"
              clipRule="evenodd"
            />
          }
          {
            getMaskVariant === 'aarni' && <path
              d="M1 0H0v1h1V0ZM.12.08H.08v.04h.04V.08ZM.16.2V.12H.2V.2H.16ZM.12.16h.04V.2H.12V.16Zm.64.6H.72V.8h.04V.76ZM.8.8h.04v.04H.8V.8H.76V.76H.8V.8ZM.72.72H.68v.04h.04V.72ZM.8.68h.04v.04H.8V.68Z"
              clipRule="evenodd"
            />
          }
        </clipPath>
      </defs>
    </svg>
  );
};

export default Masks;
