import type { StatProps } from '@/components/Stat';
import type { ProjectStatsBlockSlicePrimaryFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { HERO_ICON } from '@/graphql/templates/fragments/themes';
import { EXTERNAL_LINK_META } from '@/graphql/templates/fragments/documents';
import { Fragment } from 'react';
import Stat from '@/components/Stat';

interface StatsBlockProps {
  collection: ProjectStatsBlockSlicePrimaryFragment;
};

const StatsBlock: React.FC<StatsBlockProps> = (props) => {
  return (
    <>
      {
        props.collection.items && props.collection.items.length > 0 && <section className="text-neutral-900 dark:text-neutral-200 py-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-12">
            {
              props.collection.items.map((value, index) => {

                const getOptionalValueIcon = value.icon && value.icon.__typename === 'Heroicon'
                  ? getFragmentData(HERO_ICON, value.icon)
                  : null;

                const getOptionalValueHref = value.href && value.href.__typename === '_ExternalLink'
                  ? getFragmentData(EXTERNAL_LINK_META, value.href)
                  : null;

                if (getOptionalValueHref) {
                  return (
                    <Fragment key={`StatsBlockWithHref-${index}`}>
                      <Stat
                        value={value.value}
                        iconName={getOptionalValueIcon?.name as StatProps['iconName']}
                        iconVariant={getOptionalValueIcon?.variant as StatProps['iconVariant']}
                        href={{
                          url: getOptionalValueHref.url,
                          target: getOptionalValueHref.target,
                        }}
                        name={value.name}
                      />
                    </Fragment>
                  );
                }

                return (
                  <Fragment key={`StatsBlockWithoutHref-${index}`}>
                    <Stat
                      value={value.value}
                      iconName={getOptionalValueIcon?.name as StatProps['iconName']}
                      iconVariant={getOptionalValueIcon?.variant as StatProps['iconVariant']}
                      name={value.name}
                    />
                  </Fragment>
                );
              })
            }
          </div>
        </section>
      }
    </>
  );
};

export default StatsBlock;
