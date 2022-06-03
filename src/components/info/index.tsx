import { Popover } from '@headlessui/react';
import { Code, X, CircleWavyCheck } from 'phosphor-react';

export default () => {

  const tecnologias = {
    js: {
      icon: CircleWavyCheck,
      title: "JavaScript"
    },
    react: {
      icon: CircleWavyCheck,
      title: "ReactJS"
    },
    typescript: {
      icon: CircleWavyCheck,
      title: "Typescript"
    },
    styled: {
      icon: CircleWavyCheck,
      title: "Styled Components"
    },
    tailwind: {
      icon: CircleWavyCheck,
      title: "Tailwind"
    },
    headless: {
      icon: CircleWavyCheck,
      title: "Headless UI"
    },
    phosphor: {
      icon: CircleWavyCheck,
      title: "Phosphor Icons"  
    }
  }

  return(
    <>
      <Popover className="absolute bottom-5 right-5 flex items-end flex-col">
        <Popover.Panel className="w-80 h-52 mb-4 py-3 px-4 bg-[#18181a] rounded-md">
          <h1 className="text-center text-white text-base">
            Tecnologias usadas
          </h1>

          <Popover.Button //Botão para fechar modal
            title="Fechar modal"
            className="absolute top-4 right-4"
          >
            <X
              weight="bold" 
              color="#ffffff"
              className="w-4 h-4" 
            />
          </Popover.Button>

          <ul className="mt-3 grid grid-cols-2">
            {Object.entries(tecnologias).map(([key, value]) => (
              <li key={key} className="flex items-center mt-4">
                <value.icon color="#8A4AF3"/>
                <h1 className="text-xs text-white ml-1">{value.title}</h1>
              </li>
            ))}
          </ul>

        </Popover.Panel>
        <Popover.Button 
          className="p-2 h-10 bg-[#8A4AF3] rounded-full
          flex items-center justify-center group outline-none focus:outline-offset-2 
          focus:outline-[#8A4AF3]"
        >
          <Code 
            color="#ffffff"
            className="w-6 h-6" 
          />

          <span className="max-w-0 overflow-hidden text-white group-hover:max-w-xs
          transition-all duration-500 ease-linear">
            <span className="ml-2">Tecnologias</span>
          </span>

        </Popover.Button>
      </Popover>
    </>
  );
}
