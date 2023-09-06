import React, { useEffect, useMemo } from "react";
import { CButton, CCard, CCardBody, CContainer } from "@coreui/react";
import { FaCircle, FaEdit, FaTrash } from "react-icons/fa";
import Spinner from "src/spinner/Spinner";
import ReactTable from "../ReactTable/ReactTable";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import {
  getMobileBanner,
  openAddModal,
  openConfirmMessage,
  openUpdateModal,
  setDeleteID,
  setPrefieldValue,
  setToggleStatus,
} from "src/features/mobileBanner/MobileBannerSlice";
import Add from "./modal/Add";
import ConfirmationModel from "./modal/ConfirmationModel";
import moment from "moment";
import UpdateBanner from "./modal/UpdateBanner";

const MobileBanner = () => {
  const { mobileBannerList, isLoader } = useSelector(
    (state) => state.mobileBanner
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMobileBanner());
  }, []);

  const handleDelete = (id) => {
    dispatch(openConfirmMessage());
    dispatch(setDeleteID(id));
  };

  const handleEdit = (d) => {
    dispatch(openUpdateModal());
    // dispatch(openAddModal());
    dispatch(setPrefieldValue(d));
    dispatch(setToggleStatus(false));
  };

  const handleAddBanner = () => {
    dispatch(openAddModal());
    dispatch(setToggleStatus(true));
    dispatch(setPrefieldValue(null));
  };
  const columns = useMemo(
    () => [
      {
        Header: "Image",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <img
              src={`https://delivery-app.softprodigyphp.in/upload/${d.bannerImages[0].filename}`}
              alt="bannerImg"
              width={200}
              height={120}
              className="mobileBannerImage"
            />
          );
        },
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Duration",
        accessor: (d) => {
          return (
            <>
              {d.name === "Default" ? null : (
                <span>
                  {moment(d.startDate).local().format("DD-MM-YYYY")} -{" "}
                  {moment(d.endDate).local().format("DD-MM-YYYY")}
                </span>
              )}
            </>
          );
        },
      },
      {
        Header: "Status",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <>
              {d.name === "Default" ? null : (
                <span>
                  {
                    <FaCircle
                      className={
                        d.status === true ? "driver-online" : "driver-offline"
                      }
                    />
                  }
                </span>
              )}
            </>
          );
        },
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <>
              {d.name === "Default" ? null : (
                <CContainer className="d-flex justify-content-start align-items-center ps-0 gap-2">
                  <FaEdit
                    className="cursor"
                    title="Update Banner"
                    onClick={() => handleEdit(d)}
                  />
                  <FaTrash
                    className="cursor"
                    title="Delete Banner"
                    onClick={() => handleDelete(d.id)}
                  />
                </CContainer>
              )}
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <CCard className="mb-4">
        {isLoader ? (
          <Spinner color="primary" className="modal-spinner" />
        ) : null}
        <CCardBody>
          <CContainer className="d-flex justify-content-end gap-3 mb-4">
            <CButton
              className="button-size d-flex justify-content-center align-items-center text-white"
              color="info"
              onClick={() => handleAddBanner()}
            >
              <BsFillPlusCircleFill className="me-1 button-icon" />
              Add
            </CButton>
          </CContainer>
          <CCard className="mt-3">
            {true && (
              <ReactTable
                data={mobileBannerList?.allBanners || []}
                columns={columns}
              />
            )}
          </CCard>
        </CCardBody>
      </CCard>
      <Add />
      <UpdateBanner />
      <ConfirmationModel />
    </>
  );
};

export default MobileBanner;
