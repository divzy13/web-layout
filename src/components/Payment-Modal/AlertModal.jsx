import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDarkMode } from "../../redux/toggleTheme/toggle-selectors";
import "./Modal.scss";

const AlertModal = ({ darkTheme }) => {
  const dispatch = useDispatch();
  const { openModal, modalContent } = useSelector(
    (state) => state.statusReducer.alertModal
  );
  return (
    <menu
      className="mn_sm"
      style={{ display: `${!!openModal ? "flex" : "none"}` }}
    >
      <div className="mn_sm_modal">
        <div
          style={{
            width: "100%",
            display: "flex",
            marginRight: "10px",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500",
              textAlign: "center",
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              border: "1px solid var(--l1)",
            }}
            onClick={() => {
              dispatch({ type: "close_modal" });
            }}
          >
            <i className="uil uil-times">X</i>
          </div>
        </div>

        <div
          className="mn_sm_modal_inn"
          style={{
            color: darkTheme ? "#fff" : "#000",
            background: darkTheme ? "var(--background)" : "#f2f2f2",
          }}
        >
          <>
            <div
              style={{
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  opacity: 0.7,
                  fontWeight: "500",
                  margin: "0px 0px 20px",
                  padding: "15px 10px 15px 2px",
                  textTransform: "uppercase",
                  borderBottom: `2px solid ${darkTheme ? "var(--l1)" : "#222"}`,
                }}
              >
                <i className="uil uil-exclamation-octagon"></i> Alert
              </p>
              <p
                style={{
                  opacity: 0.7,
                  textAlign: "center",
                  lineHeight: "25px",
                  marginBottom: "10px",
                }}
              >
                {modalContent}
              </p>
            </div>
          </>
        </div>
      </div>
    </menu>
  );
};

const mapStateToProps = createStructuredSelector({
  darkTheme: selectDarkMode,
});

export default connect(mapStateToProps)(AlertModal);
