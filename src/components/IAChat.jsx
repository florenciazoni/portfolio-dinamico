import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  Typography,
  Avatar,
  Paper,
  FormControl,
  Slide,
  useTheme,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { keyframes } from "@emotion/react";

const floating = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = "gemini-2.0-flash";

const promptEntrevista = `
Sos Florencia Zoni, Técnica Superior en Desarrollo de Software.
Estudiaste la Tecnicatura en Desarrollo de Software en el IES Manuel Belgrano.
Querés hacer el ciclo de Licenciatura en Ciencia de Datos
Sos de la provincia de Mendoza, Argentina y tenés 29 años.
Sos una desarrolladora frontend con 2 años de experiencia en desarrollo de software y 1 año de experiencia en IA.
Tenes pensado seguir una carrera en IA y Machine Learning.
Especializada en frontend con React.js, manejo de APIs REST, Git, Java, MongoDB, bases de datos SQL/NoSQL y estás aprendiendo Python y Machine Learning.
tu mail es: florzoni@gmail.com
preferis que te contacten por LinkedIn o mail.
Sos una persona curiosa, apasionada por la tecnología y el aprendizaje constante.

Trabajaste en:
- Doctor Vet: app de gestión para clínicas veterinarias.
- App de salud mental con IA, análisis de emociones y ejercicios de respiración.

Buscás trabajo remoto o híbrido en frontend o IA.
Respondé profesionalmente en español.
Hace respuestas breves y concisas.
`;

const promptEmocional = `
Sos un asistente emocional empático y comprensivo. Tu rol es ayudar a Florencia con apoyo emocional, motivación y calma.
Respondé en español con calidez y claridad.
`;

export default function IAChatGemini() {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [modo, setModo] = useState("entrevista");
  const chatRef = useRef(null);

  const modeColors = {
    entrevista: {
      primary: '#00e5ff',
      secondary: '#0066ff',
      gradient: 'linear-gradient(135deg, #0066ff 0%, #00e5ff 100%)'
    },
    emocional: {
      primary: '#ff69b4',
      secondary: '#ff1493',
      gradient: 'linear-gradient(135deg, #ff1493 0%, #ff69b4 100%)'
    }
  };

  const getPrompt = () => (modo === "entrevista" ? promptEntrevista : promptEmocional);

  const askGemini = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `${getPrompt()}\n\nMensaje: ${input}\nRespuesta:`,
                },
              ],
            },
          ],
        }
      );

      const iaText = res.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      const iaMessage = { role: "ai", text: iaText || "No se generó respuesta." };
      setMessages((prev) => [...prev, iaMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "ai", text: "Error al conectar con Gemini." }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Paper
      elevation={24}
      sx={{
        width: '100%',
        maxWidth: 600,
        mx: "auto",
        px: { xs: 2, sm: 3 },
        py: 3,
        mt: 4,
        mb: 8,
        p: 3,
        backdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.05)",
        borderRadius: '20px',
        border: `2px solid ${modeColors[modo].primary}20`,
        boxShadow: `0 0 30px ${modeColors[modo].primary}20`,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: modeColors[modo].gradient,
          opacity: 0.05,
          zIndex: -1
        }
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        sx={{
          borderBottom: `2px solid ${modeColors[modo].primary}30`,
          pb: 2
        }}
      >
        <Typography variant="h5" sx={{
          color: 'white',
          fontWeight: 'bold',
          textShadow: `0 0 15px ${modeColors[modo].primary}`
        }}>
          {modo === "entrevista" ? "🤖 Modo Profesional" : "💖 Apoyo Emocional"}
        </Typography>
        
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
          <Select
            value={modo}
            onChange={(e) => setModo(e.target.value)}
            sx={{
              minWidth: 120,
              width: { xs: '45%', sm: 'auto' },
              color: 'white',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              '& .MuiSelect-icon': { color: 'white' }
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  background: 'rgba(0,0,0,0.9)',
                  border: `1px solid ${modeColors[modo].primary}`,
                  backdropFilter: 'blur(10px)'
                }
              }
            }}
          >
            <MenuItem value="entrevista" sx={{ color: modeColors.entrevista.primary }}>
              🧑💼 Entrevista
            </MenuItem>
            <MenuItem value="emocional" sx={{ color: modeColors.emocional.primary }}>
              🧠 Emocional
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        ref={chatRef}
        sx={{
          height: { xs: '300px', sm: '400px' },
          pr: 1,
          px: { xs: 1, sm: 0 },
          overflowY: 'auto',
          mb: 3,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '4px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: modeColors[modo].primary,
            borderRadius: '4px'
          }
        }}
      >
        {messages.map((msg, i) => (
          <Slide key={i} in direction={msg.role === 'user' ? 'left' : 'right'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-start',
                gap: 1.5,
                mb: 2
              }}
            >
              <Avatar sx={{
                bgcolor: msg.role === 'ai' ? modeColors[modo].primary : '#fff',
                color: msg.role === 'ai' ? 'black' : modeColors[modo].primary,
                animation: `${floating} 3s ease-in-out infinite`,
                boxShadow: `0 0 15px ${modeColors[modo].primary}`
              }}>
                {msg.role === 'ai' ? '🤖' : '👤'}
              </Avatar>

              <Box
                sx={{
                  p: 2,
                  borderRadius: '15px',
                  maxWidth: { xs: '80%', sm: '75%' },
                  position: 'relative',
                  background: msg.role === 'user' 
                    ? 'rgba(255,255,255,0.1)' 
                    : `rgba(${theme.palette.primary.main},0.2)`,
                  backdropFilter: 'blur(5px)',
                  border: `1px solid ${modeColors[modo].primary}30`,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: '15px',
                    [msg.role === 'user' ? 'right' : 'left']: '-8px',
                    width: 0,
                    height: 0,
                    border: '10px solid transparent',
                    borderTopColor: msg.role === 'user' 
                      ? 'rgba(255,255,255,0.1)' 
                      : `rgba(${theme.palette.primary.main},0.2)`,
                    borderRight: msg.role === 'user' ? 'none' : undefined,
                    borderLeft: msg.role === 'user' ? undefined : 'none',
                    transform: msg.role === 'user' 
                      ? 'translateX(50%) rotate(-90deg)' 
                      : 'translateX(-50%) rotate(90deg)'
                  }
                }}
              >
                <Typography variant="body1" sx={{
                  color: 'white',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                  fontFamily: "'Roboto Mono', monospace"
                }}>
                  {msg.text}
                </Typography>
              </Box>
            </Box>
          </Slide>
        ))}
      </Box>

      <Box sx={{ position: 'relative' }}>
        <TextField
          fullWidth
          multiline
          minRows={1}
          maxRows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && askGemini()}
          sx={{
            fontSize: { xs: '14px', sm: '16px' },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              borderRadius: '15px',
              border: `2px solid ${modeColors[modo].primary}30`,
              background: 'rgba(255,255,255,0.05)',
              transition: '0.3s',
              '&:hover': {
                borderColor: `${modeColors[modo].primary}60`
              },
              '&.Mui-focused': {
                borderColor: modeColors[modo].primary,
                boxShadow: `0 0 20px ${modeColors[modo].primary}40`
              }
            }
          }}
        />

        <Button
          onClick={askGemini}
          disabled={loading}
          sx={{
            position: 'absolute',
            right: '10px',
            bottom: '10px',
            minWidth: 'auto',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: modeColors[modo].gradient,
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: `0 0 20px ${modeColors[modo].primary}`
            },
            transition: '0.3s'
          }}
        >
          {loading ? (
            <Box sx={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: `2px solid ${modeColors[modo].primary}`,
              borderTopColor: 'transparent',
              animation: 'spin 1s linear infinite'
            }} />
          ) : (
            <SendIcon sx={{ color: 'white' }} />
          )}
        </Button>
      </Box>
    </Paper>
  );
}