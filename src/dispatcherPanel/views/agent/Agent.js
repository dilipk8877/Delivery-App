import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CFormInput,
  CLink,
} from "@coreui/react";
import { MdHomeWork } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiExport } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  openAgentAddModal,
  searchAgents,
} from "src/features/agents/AgentSlice";
import Add from "./modal/Add";
import Spinner from "src/spinner/Spinner";
import ConfirmationModel from "./modal/ConfirmationModel";
import AssignDriver from "./modal/AssignTeam";
import { toast } from "react-toastify";

const Agent = () => {
  const { agentList, isLoader, currentSTs, currentPage } = useSelector(
    (state) => state.agent
  );
  const [pathLoaction, setPathLoaction] = useState("");
  const dispatch = useDispatch();
  const noDataMessage = () => toast.error(`No Agent found in ${currentPage} `);

  const { pathname } = useLocation();

  useEffect(() => {
    setPathLoaction("");
  }, [pathname]);

  return (
    <>
      <CCard className="mb-4">
        {isLoader ? <Spinner className="modal-spinner" /> : null}
        <CCardBody>
          <CContainer className="d-flex justify-content-end gap-3 mb-4">
            {agentList?.agents?.length > 0 ? (
              <CButton
                color="info"
                className="button-size ms-3 d-flex justify-content-center align-items-center"
              >
                <CLink
                  className="text-decoration-none text-white"
                  href={`https://delivery-app.softprodigyphp.in/export_agent/${currentPage}`}
                  download="filename.csv"
                >
                  <BiExport className="me-1 button-icon" />
                  Export
                </CLink>
              </CButton>
            ) : (
              <CButton
                color="info"
                className="button-size ms-3 d-flex justify-content-center align-items-center"
                onClick={() => noDataMessage()}
              >
                <CLink className="text-decoration-none text-white">
                  <BiExport className="me-1 button-icon" />
                  Export
                </CLink>
              </CButton>
            )}
            <CButton
              className="button-size text-white d-flex justify-content-center align-items-center"
              color="info"
              onClick={() => dispatch(openAgentAddModal())}
            >
              <BsFillPlusCircleFill className="me-1 button-icon" />
              Add
            </CButton>
          </CContainer>
          <CContainer className="d-flex justify-content-between align-items-center w-100 text-center fs-6">
            <CContainer className="agent-conatainer ">
              {agentList ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <MdHomeWork className="text-dark fs-5 me-2" />
                    {agentList?.totalAgents}
                  </span>
                  <p>Total Agents</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <MdHomeWork className="text-dark fs-5 me-2" />0
                  </span>
                  <p>Total Agents</p>
                </>
              )}
            </CContainer>
            <CContainer className="agent-conatainer ">
              {agentList ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <RiBriefcase2Fill className="text-dark fs-5 me-2" />
                    {agentList?.freelancer}
                  </span>
                  <p>Freelancer</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <RiBriefcase2Fill className="text-dark fs-5 me-2" />0
                  </span>
                  <p>Freelancer</p>
                </>
              )}
            </CContainer>
            <CContainer className="agent-conatainer ">
              {agentList ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <HiUser className="text-dark fs-5 me-2" />
                    {agentList?.employees}
                  </span>
                  <p>Employees</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <HiUser className="text-dark fs-5 me-2" />0
                  </span>
                  <p>Employees</p>
                </>
              )}
            </CContainer>
            <CContainer className="agent-conatainer ">
              {agentList ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <TiBusinessCard className="text-dark fs-5 me-2" />
                    {agentList?.approvedAgents}
                  </span>
                  <p>Approved Agents</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <TiBusinessCard className="text-dark fs-5 me-2" />0
                  </span>
                  <p>Approved Agents</p>
                </>
              )}
            </CContainer>
            <CContainer className="agent-conatainer ">
              {agentList ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <FaUserCircle className="text-dark fs-5 me-2" />
                    {agentList?.unApprovedAgents}
                  </span>
                  <p>Unapproved Agents</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <FaUserCircle className="text-dark fs-5 me-2" />0
                  </span>
                  <p>Unapproved Agents</p>
                </>
              )}
            </CContainer>
          </CContainer>
          <CContainer className="d-flex mt-5 justify-content-between align-items-center">
            <CContainer>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeLink  me-4 fs-6 text-decoration-none text-black font-weight-bold"
                    : "normalLink  me-4 fs-6"
                }
                to="/dispatcher/agent/active"
              >
                Active
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeLink ms-4 fs-6 text-decoration-none text-black font-weight-bold"
                    : "normalLink ms-4 fs-6"
                }
                to="/dispatcher/agent/awaiting"
              >
                Awaiting Approval
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeLink ms-4 me-4 fs-6 text-decoration-none text-black font-weight-bold"
                    : "normalLink ms-4 me-4 fs-6"
                }
                to="/dispatcher/agent/blocked"
              >
                Blocked
              </NavLink>
            </CContainer>
            <CFormInput
              type="search"
              className="w-50 mb-3 border border-dark"
              placeholder="Search by Agent Name..."
              maxLength={100}
              value={pathLoaction}
              onChange={(e) =>
               { dispatch(
                  searchAgents({ currentSTs, search: e.target.value.trim() })
                ); setPathLoaction(e.target.value)}
              }
            />
          </CContainer>
          <Outlet></Outlet>
        </CCardBody>
        <Add />
        <ConfirmationModel />
        <AssignDriver />
      </CCard>
    </>
  );
};

export default Agent;
