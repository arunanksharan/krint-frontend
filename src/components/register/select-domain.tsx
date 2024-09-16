import { SelectDomainOptions } from '@/lib/constants';
import Image from 'next/image';

const DomainCard = ({
  name,
  title,
  description,
  image,
  image_alt_text,
  handleDomainSelection,
}: {
  name: string;
  title: string;
  description: string;
  image: string;
  image_alt_text: string;
  handleDomainSelection: (domain: string) => void;
}) => {
  return (
    <div
      className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition transform duration-200 hover:scale-105 max-w-64 min-h-64 flex flex-col items-center justify-center"
      onClick={() => {
        handleDomainSelection(name);
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-top">
        <div className="h-full">
          <Image
            src={`/domains/final/${image}`}
            width={150}
            height={75}
            alt={image_alt_text}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-top">
          <div className="text-base font-quicksand font-semibold text-gray-800 text-center">
            {title}
          </div>
          <div className="text-gray-600 font-quicksand text-sm text-center">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const DomainGrid = ({
  handleDomainSelection,
}: {
  handleDomainSelection: (name: string) => void;
}) => {
  const domains = Object.values(SelectDomainOptions);

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-2xl font-quicksand font-bold text-center mb-8">
        I want to learn...
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {domains.map((domain, index) => (
          <DomainCard
            key={index}
            name={domain.name}
            title={domain.title}
            description={domain.description}
            image={domain.image}
            image_alt_text={domain.title}
            handleDomainSelection={handleDomainSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default DomainGrid;
