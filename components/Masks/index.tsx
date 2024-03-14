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
            getMaskVariant === 'avatarBlob' && <path
              d="M0.775913 0.123988C0.879408 0.207576 0.995439 0.306336 0.999884 0.445446C1.00426 0.582475 0.883662 0.67504 0.796727 0.775332C0.71488 0.869755 0.639502 0.988662 0.519871 0.999214C0.399647 1.00982 0.302647 0.911079 0.210773 0.827016C0.117833 0.741978 0.00304347 0.654783 5.38284e-05 0.523592C-0.00288301 0.394719 0.114993 0.311807 0.196887 0.217668C0.273623 0.129458 0.341499 0.0213796 0.452572 0.00340942C0.569843 -0.0155635 0.681087 0.0474022 0.775913 0.123988Z"
              clipRule="evenodd"
            />
          }
          {
            getMaskVariant === 'fullWidth' && <>
              <path
                d="M.316 0H.93v.057h.035v.057H1V1H.613V.943H.596V.886H.56V.829H.542v.057H.524v.057H.506V1H0V0h.191v.057h.036v.057h.018V.057H.28V0h.018v.114H.28v.057h.018V.114h.018V0ZM.018.057h.018v.057H.018V.057Zm.036.057H.07V.23H.036V.17h.018V.114Zm.928.6H.964v.057h.018V.714ZM.911.771h.018V.83H.91V.77Zm.053.115H.93V.829h.035v.057Zm0 0h.018v.057H.964V.886ZM.614.057H.63v.057H.613V.057ZM.63.114h.036v.057H.631V.114Z"
                clipRule="evenodd"
              />
              <path
                d="M.245 0H.227v.057h.018V0ZM.542.886H.56v.057h.036V1H.542V.886ZM.964.057V0H1v.057H.964Z"
              />
            </>
          }
        </clipPath>
      </defs>
    </svg>
  );
};

export default Masks;
