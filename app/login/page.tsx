import { Button, Card, Icon, Input } from "@/components/ui";

export default function LoginPage() {
  return (
    <div className="wa-stack wa-justify-content-center wa-align-items-center">
      <Card style={{ width: "400px", marginTop: "40px" }}>
        <div className="wa-stack wa-gap-l">
          <form className="wa-stack wa-gap-m">
            <Input label="Username" type="text" />
            <Input label="Password" type="password" password-toggle />

            <div>
              <a href="#" className="wa-caption-s">
                Forgot password?
              </a>
            </div>

            <Button variant="brand" size="medium">
              Sign In
            </Button>
          </form>

          <div className="wa-cluster wa-justify-content-center wa-gap-2xs">
            <span className="wa-caption-s">OR</span>
          </div>

          <div className="wa-stack wa-gap-xs">
            <Button appearance="outlined" size="medium">
              <Icon slot="start" name="github" family="brands" />
              Continue with GitHub
            </Button>
          </div>

          <div
            className="wa-caption-s"
            style={{ textAlign: "center", color: "var(--wa-color-neutral-60)" }}
          >
            Don&apos;t have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </Card>
    </div>
  );
}
