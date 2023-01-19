import { Typography, Card, Stack, Avatar, Box } from "@mui/material";
import { SocialIcon } from "react-social-icons";

function Home() {
  return (
    <Stack spacing={2}>
      {/* <Card sx={{ p: 2 }} spacing={2}>
        <Stack>
          <Typography variant="h6" sx={{ fontFamily: "Merriweather" }}>
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन{" "}
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontStyle: "italic", color: "grey", marginTop: 1 }}
          >
            You have a right to perform your prescribed duty, but you are not
            entitled to the fruits of actions.
          </Typography>
        </Stack>
        <Stack sx={{ marginTop: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: "Merriweather" }}>
            मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "grey", fontStyle: "italic", marginTop: 1 }}
          >
            Never consider yourself the cause of the results of your activities,
            and never be attached to not doing your duty
          </Typography>
        </Stack>
      </Card> */}
      <Card alignItems="flex-start" sx={{ p: 2 }} flexDirection="row">
        <Stack spacing={1}>
          <Stack
            flexDirection="row"
            spacing={1}
            alignItems="center"
            justifyContent="flex-start"
          >
            <Avatar
              sx={{ marginRight: 1, border: "2px solid grey" }}
              src="https://media.licdn.com/dms/image/D4E03AQE-U_py2AyJ4Q/profile-displayphoto-shrink_800_800/0/1666589222098?e=1679529600&v=beta&t=aSkLfGnINZpBzsEkdzXVkROlaY1PXOhw31MyxBar-dI"
            ></Avatar>
            <Stack>
              <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
                Nirbhay Singh Narang
              </Typography>
              <Typography sx={{ color: "grey" }} variant="caption">
                निर्भय सिंह नारंग • ਨਿਰਭੈ ਸਿੰਘ ਨਾਰੰਗ
              </Typography>
            </Stack>
          </Stack>

          <Typography sx={{ color: "grey" }} variant="caption">
            CS @ Cornell. Engineer interested in entrepreneurship, history, and
            philosophy.
          </Typography>
        </Stack>
        <Stack
          sx={{ marginTop: 2 }}
          flex={1}
          flexDirection="row"
          justifyContent="flex-start"
        >
          <SocialIcon
            style={{ width: 32, height: 32 }}
            url="https://github.com/nirbhaysinghnarang"
          ></SocialIcon>
          <SocialIcon
            style={{ marginLeft: 10, width: 32, height: 32 }}
            url="https://www.linkedin.com/in/nirbhay-singh-narang-6188a11ab/"
          ></SocialIcon>
          <SocialIcon
            style={{ marginLeft: 10, width: 32, height: 32 }}
            url="https://twitter.com/nirbhay_narang"
          ></SocialIcon>
          <SocialIcon
            style={{ marginLeft: 10, width: 32, height: 32 }}
            url="mailto:nsn8@cornell.edu"
          ></SocialIcon>
        </Stack>
      </Card>
      <Card></Card>
    </Stack>
  );
}

export default Home;
