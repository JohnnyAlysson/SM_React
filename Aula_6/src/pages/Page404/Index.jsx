import { Link, Navigate} from "react-router-dom"

export const Page404 = () =>{

  function sendHome(){
    Navigate("/")
  }

  return (
        <div className="bg-[#000013] min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Ops, esta página<br />não foi encontrada
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Parece que você se perdeu... Tente voltar<br />para a página anterior ou acessar a home.
                </p>
                <div className="flex space-x-4">
                  <button onClick={sendHome} className="px-6 py-2 bg-[#1E1E3F] text-white rounded-full text-sm font-medium hover:bg-[#2E2E5F] transition-colors">
                  Homepage
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="text-[180px] font-bold text-[#8A4FFF]">
                    4<span className="inline-block w-32 h-32 rounded-full bg-[#8A4FFF] mx-2"></span>4
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 bg-[#C39CFF] rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 w-20 h-2 bg-[#8A4FFF] transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-12 w-4 h-4 bg-[#8A4FFF] rounded-full"></div>
                  <div className="absolute bottom-12 left-8 w-3 h-3 bg-[#8A4FFF] rounded-full"></div>
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8A4FFF] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  