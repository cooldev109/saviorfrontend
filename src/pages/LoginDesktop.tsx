import { EyeOffIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";

export const LoginDesktop = (): JSX.Element => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate("/dashboard");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login. Verifique suas credenciais.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col items-center px-4 py-8 md:py-12">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="relative mb-8 md:mb-12">
          <img
            className="w-32 h-auto md:w-48 lg:w-56 object-cover"
            alt="Logo SAVIOR"
            src="/figmaAssets/logo-savior-horizontal-1.png"
          />
          <div className="absolute top-0 right-0 translate-x-full ml-4 w-14 h-7 bg-[#dd2e44] rounded-[25px] flex items-center justify-center">
            <div className="[font-family:'Poppins',Helvetica] font-bold text-black text-base md:text-xl text-center tracking-[-0.30px] leading-[20.5px] whitespace-nowrap">
              +16
            </div>
          </div>
        </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Label className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs md:text-sm">
            Email
          </Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-9 md:h-10 bg-[#e8e8e84c] rounded-lg border-0 [font-family:'Poppins',Helvetica] font-normal text-[#2e2828] text-sm"
            placeholder="Digite seu email..."
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs md:text-sm">
            Senha
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-9 md:h-10 bg-[#e8e8e84c] rounded-lg border-0 [font-family:'Poppins',Helvetica] font-normal text-[#2e2828] text-sm pr-10"
              placeholder="Digite sua senha..."
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <EyeOffIcon className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mt-6">
          <div className="flex items-center gap-2">
            <Checkbox
              id="stay-connected"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label
              htmlFor="stay-connected"
              className="[font-family:'Poppins',Helvetica] font-normal text-[#00000080] text-xs md:text-sm cursor-pointer"
            >
              Manter-se conectado
            </Label>
          </div>
          <button
            type="button"
            className="[font-family:'Poppins',Helvetica] font-bold text-[#147d6f] text-xs md:text-sm underline"
          >
            Esqueceu a senha?
          </button>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="h-10 md:h-12 bg-[#e8f5e9] hover:bg-[#d4ead6] rounded-[40px] [font-family:'Poppins',Helvetica] font-bold text-[#153226] text-sm md:text-base mt-4 disabled:opacity-50"
        >
          {isLoading ? "Entrando..." : "Iniciar Sessão"}
        </Button>
      </form>

      <div className="w-full max-w-4xl mt-8 md:mt-12">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#147d6f] text-xl md:text-2xl text-center tracking-[-0.30px] leading-[normal] mb-6">
          Verificador de Fake News:
        </h2>
        <div className="w-full bg-[#dfdfdf] rounded-[5px] border border-solid border-black flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-6 md:p-8">
          <img
            className="w-24 h-24 md:w-40 md:h-40 object-cover"
            alt="Image"
            src="/figmaAssets/image-50.png"
          />
          <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg md:text-2xl lg:text-3xl text-center tracking-[0.50px] leading-6 md:leading-8">
            Notícia - Descrição
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 [font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-xl lg:text-2xl text-center tracking-[0] leading-[normal]">
        Não tem uma conta?{" "}
        <Link to="/register" className="font-bold text-[#147d6fb2] underline">
          Cadastra-se
        </Link>
      </div>
      </div>
    </div>
  );
};
