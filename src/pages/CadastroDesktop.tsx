import { EyeOffIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";

export const CadastroDesktop = (): JSX.Element => {
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    telefone: "",
    firstName: "",
    lastName: "",
    nascimento: "",
    password: "",
    email: "",
    avatarUrl: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate("/dashboard");
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!acceptedTerms) {
      setError("Você deve aceitar os termos para continuar");
      return;
    }

    setIsLoading(true);

    try {
      // Split full name into first and last name
      const nameParts = formData.firstName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || formData.lastName;

      const registrationData: any = {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        firstName,
        lastName,
      };

      // Add avatarUrl only if provided
      if (formData.avatarUrl.trim()) {
        registrationData.avatarUrl = formData.avatarUrl;
      }

      await register(registrationData);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Erro ao criar conta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const formFields = [
    {
      id: "username",
      label: "Login/Savior",
      placeholder: "Nome Savior",
      type: "text",
      value: formData.username,
    },
    {
      id: "telefone",
      label: "Telefone",
      placeholder: "(XX)XXXXX-XXXX",
      type: "tel",
      value: formData.telefone,
    },
    {
      id: "firstName",
      label: "Nome Completo",
      placeholder: "Digite o nome completo",
      type: "text",
      value: formData.firstName,
    },
    {
      id: "nascimento",
      label: "Data de Nascimento",
      placeholder: "DD/MM/AAAA",
      type: "text",
      value: formData.nascimento,
    },
    {
      id: "password",
      label: "Senha",
      placeholder: "************",
      type: "password",
      value: formData.password,
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Digite email",
      type: "email",
      value: formData.email,
    },
    {
      id: "avatarUrl",
      label: "URL do Avatar (Opcional)",
      placeholder: "https://exemplo.com/avatar.jpg",
      type: "url",
      value: formData.avatarUrl,
    },
  ];

  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex items-center justify-center px-4 py-8 md:py-12">
      <main className="flex flex-col items-center w-full max-w-lg">
        <header className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
          <h1 className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-[normal]">
            Criar Conta
          </h1>
          <Badge className="bg-[#dd2e44] rounded-[25px] h-7 md:h-9 px-2 md:px-2.5 hover:bg-[#dd2e44]">
            <span className="[font-family:'Poppins',Helvetica] font-bold text-black text-lg md:text-2xl text-center tracking-[-0.30px] leading-[20.5px]">
              +16
            </span>
          </Badge>
        </header>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#00000080] text-sm md:text-base text-center tracking-[0] leading-[normal] mb-8 md:mb-12 max-w-xs">
          Preencha as informações abaixo para poder acessar as informações de
          nosso aplicativo
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 md:gap-4">
          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-1.5">
              <Label
                htmlFor={field.id}
                className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs md:text-sm tracking-[0] leading-[normal]"
              >
                {field.label}
              </Label>
              <div className="relative">
                <Input
                  id={field.id}
                  type={field.id === "password" && showPassword ? "text" : field.type}
                  value={field.value}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.id !== "telefone" && field.id !== "nascimento" && field.id !== "avatarUrl"}
                  placeholder={field.placeholder}
                  className="w-full h-9 md:h-10 bg-[#e8e8e84c] rounded-lg border-0 [font-family:'Poppins',Helvetica] font-normal text-[#2e2828] text-xs md:text-sm tracking-[0] leading-[normal] px-4"
                />
                {field.id === "password" && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="w-4 h-4 md:w-5 md:h-5 text-[#2e282880]" />
                    ) : (
                      <EyeOffIcon className="w-4 h-4 md:w-5 md:h-5 text-[#2e282880]" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

          <div className="w-full h-16 md:h-20 bg-[#d9d9d9] mt-4 md:mt-6 flex items-center px-3 md:px-4">
            <img
              className="w-12 h-12 md:w-16 md:h-16 object-cover"
              alt="reCAPTCHA"
              src="/figmaAssets/image-92.png"
            />
          </div>

          <div className="flex items-start gap-2 mt-6 md:mt-8">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
              className="w-5 h-5 md:w-6 md:h-6 mt-0.5"
            />
            <Label
              htmlFor="terms"
              className="[font-family:'Poppins',Helvetica] font-normal text-xs md:text-sm lg:text-base tracking-[0] leading-[normal] cursor-pointer"
            >
              <span className="text-[#00000080]">Concordo com os </span>
              <Link to="/terms" className="text-[#147d6f] underline">
                Termos do App
              </Link>
              <span className="text-[#00000080]"> e </span>
              <span className="text-[#147d6f] underline">
                Política de Privacidade
              </span>
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 md:h-14 lg:h-16 bg-[#e8f5e9] hover:bg-[#e8f5e9]/90 rounded-[40px] mt-6 md:mt-8 disabled:opacity-50"
          >
            <span className="[font-family:'Poppins',Helvetica] font-bold text-[#153226] text-lg md:text-2xl lg:text-3xl text-center tracking-[0] leading-[normal]">
              {isLoading ? "Criando conta..." : "Registrar-se"}
            </span>
          </Button>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-sm md:text-base text-center tracking-[0] leading-[normal] mt-6">
            <span className="text-black">Já tem uma conta? </span>
            <Link
              to="/login"
              className="font-bold text-[#147d6fb2] underline bg-transparent border-0 cursor-pointer"
            >
              Entrar
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};
